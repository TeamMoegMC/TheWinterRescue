// Use Ammonite to run

import $ivy.`io.spray::spray-json:1.3.6`, spray.json._
import DefaultJsonProtocol._
import java.io.File
import scala.io.Source
import mainargs.main

type LangFileFragment = List[(String, String)]

case class Effect(
                   id: String,
                   name: Option[String],
                   tooltip: Option[List[String]],
                 ) {
  def langForName(researchID: String, effectIndex: Int): LangFileFragment =
    name.map(n => List(s"effect.frostedheart.$researchID.effects.${effectIndex}_$id" -> n)).getOrElse(List())

  def langForTooltip(researchID: String, effectIndex: Int): LangFileFragment =
    tooltip.map { tt =>
      tt.zipWithIndex.map { case (value, index) =>
        s"effect.frostedheart.$researchID.effects.${effectIndex}_$id.$index" -> value
      }
    }.getOrElse(List())

  def toLang(researchID: String, effectIndex: Int): LangFileFragment = {
    langForName(researchID, effectIndex) :::
      langForTooltip(researchID, effectIndex)
  }
}

case class Clue(
                 id: String,
                 name: Option[String],
                 desc: Option[String],
                 hint: Option[String]
               ) {
  def langForName(researchID: String, clueIndex: Int): LangFileFragment =
    name.map(n => List(s"clue.frostedheart.$researchID.clue.${clueIndex}_$id.name" -> n)).getOrElse(List())

  def langForDesc(researchID: String, clueIndex: Int): LangFileFragment = {
    desc.map(n => List(s"clue.frostedheart.$researchID.clue.${clueIndex}_$id.desc" -> n)).getOrElse(List())
  }

  def langForHint(researchID: String, clueIndex: Int): LangFileFragment =
    hint.map(n => List(s"clue.frostedheart.$researchID.clue.${clueIndex}_$id.hint" -> n)).getOrElse(List())

  def toLang(researchID: String, clueIndex: Int): LangFileFragment =
    langForName(researchID, clueIndex) :::
      langForDesc(researchID, clueIndex) :::
      langForHint(researchID, clueIndex)
}

case class Research(researchID: String,
                    name: String,
                    desc: List[String],
                    descAlt: List[String],
                    effects: List[Effect],
                    clues: List[Clue]
                   ) {
  def langForName: LangFileFragment = List(
    s"research.frostedheart.$researchID.name" -> s"$name"
  )

  def langForDesc: LangFileFragment =
    desc.zipWithIndex.map { case (value, index) =>
      s"research.frostedheart.$researchID.desc.$index" -> s"$value"
    }

  def langForDescAlt: LangFileFragment =
    descAlt.zipWithIndex.map { case (value, index) =>
      s"research.frostedheart.$researchID.desc_alt.$index" -> s"$value"
    }

  def toLang: LangFileFragment =
    langForName ::: langForDesc ::: langForDescAlt :::
      effects.zipWithIndex.flatMap { case (eff, ind) => eff.toLang(researchID, ind) } :::
      clues.zipWithIndex.flatMap { case (clue, ind) => clue.toLang(researchID, ind) }
}

def parseConfig(key: String, content: String): Research = {
  val parsed = content.parseJson.asJsObject.fields
  Research(
    researchID = key,
    name = parsed("name").convertTo[String],
    desc = parsed.get("desc").map(_.convertTo[List[String]]).getOrElse(List("")),
    descAlt = parsed.get("descAlt").map(_.convertTo[List[String]]).getOrElse(List("")),

    effects = parsed
      .get("effects")
      .map(_.convertTo[List[Map[String, JsValue]]])
      .get
      .map { eff =>
        Effect(
          id = eff("id").convertTo[String],
          name = eff.get("name").map(_.convertTo[String]),
          tooltip = eff.get("tooltip").map(_.convertTo[List[String]])
        )
      },
    clues = parsed
      .get("clues")
      .map(_.convertTo[List[Map[String, JsValue]]])
      .get
      .map { clue =>
        Clue(
          id = clue("id").convertTo[String],
          name = clue.get("name").map(_.convertTo[String]),
          desc = clue.get("desc").map(_.convertTo[String]),
          hint = clue.get("hint").map(_.convertTo[String])
        )
      }
  )
}

def mergeLang(fromConfig: Map[String, String], fromLang: Map[String, String]): Map[String, String] = {
  val mergedKeys = fromConfig.keys.toSet ++ fromLang.keys.toSet
  mergedKeys.map { key =>
    val configVal = fromConfig.get(key)
    val langVal = fromLang.get(key)
    configVal match {
      case Some("@") => key -> langVal.getOrElse("")
      case Some(content) => key -> content
      case None => key -> langVal.get
    }
  }.toMap
}

@main
def main(config: String, lang: String): Unit = {
  val configDir = new File(config)
  val langFile = Source.fromFile(new File(lang))
  val langFrag = langFile.getLines().mkString.parseJson.asJsObject.fields.map { case k -> v => k -> v.convertTo[String] }
  langFile.close()

  val resFrag = configDir.listFiles()
    .map { f => (f.getName.split("\\."), f) }
    .filter { case (n, _) => n.last == "json" }
    .map { case (n, f) => (n.head, f) }
    .map { case (name, file) =>
      val source = Source.fromFile(file)
      val res = parseConfig(name, source.getLines().mkString)
      source.close()
      res
    }
    .flatMap(_.toLang)
    .filter(!_._2.matches("@\\S+")) // Eliminates values in the form "@xxx.xxx.xxxxx"
    .toMap //.toJson.sortedPrint
  print(
    mergeLang(resFrag, langFrag).toJson.sortedPrint
  )
}