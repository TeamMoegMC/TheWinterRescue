# labplot.py
import matplotlib.pyplot as plt
from cycler import cycler
import matplotlib as mpl
import numpy as np

def set_style():
    """Apply global plotting style for scientific figures."""
    mpl.rcParams.update({
        # --- Figure ---
        "figure.figsize": (4.5, 3.5),
        "figure.dpi": 150,
        "figure.autolayout": True,

        # --- Font & text ---
        "font.family": "serif",
        "font.size": 11,
        "mathtext.fontset": "stix",
        "axes.titlesize": 11,
        "axes.labelsize": 11,
        "legend.fontsize": 9,
        "xtick.labelsize": 9,
        "ytick.labelsize": 9,

        # --- Axes ---
        # "axes.linewidth": 0.8,
        # "axes.grid": True,
        # "axes.grid.which": "major",
        # "grid.linestyle": "--",
        # "grid.linewidth": 0.4,
        # "grid.alpha": 0.5,
        "axes.spines.top": False,
        "axes.spines.right": False,

        # --- Lines & markers ---
        "lines.linewidth": 1.6,
        "lines.markersize": 4,
        "lines.markeredgewidth": 0.5,
        "axes.prop_cycle": cycler(
            color=[
                "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728",
                "#9467bd", "#8c564b", "#e377c2", "#7f7f7f",
                "#bcbd22", "#17becf"
            ]
        ),

        # --- Legend ---
        "legend.frameon": False,
        "legend.handlelength": 1.6,
        "legend.loc": "best",

        # --- Ticks ---
        # "xtick.direction": "in",
        # "ytick.direction": "in",
        # "xtick.major.size": 3,
        # "ytick.major.size": 3,
        # "xtick.minor.size": 1.5,
        # "ytick.minor.size": 1.5,
        # "xtick.minor.visible": True,
        # "ytick.minor.visible": True,

        # # --- Savefig ---
        # "savefig.transparent": False,
        # "savefig.bbox": "tight",
        # "savefig.pad_inches": 0.02,
    })

def format_axes(ax, xlabel=None, ylabel=None, title=None, legend=False):
    """Apply consistent axis labeling and optional legend."""
    if xlabel:
        ax.set_xlabel(xlabel)
    if ylabel:
        ax.set_ylabel(ylabel)
    if title:
        ax.set_title(title)
    if legend:
        ax.legend(frameon=False)
    ax.tick_params(which="both", width=0.6, length=3)
    return ax

def savefig(fig, filename, dpi=300):
    """Save figure in high quality for publication."""
    fig.savefig(filename, dpi=dpi)
    print(f"Saved figure to {filename}")