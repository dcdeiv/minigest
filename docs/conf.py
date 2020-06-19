import os
import sys

sys.path.insert(0, os.path.abspath("../minigest/"))


# -- Project information -----------------------------------------------------

project = "minigest"
copyright = "2020, Davide Di Criscito"
author = "Davide Di Criscito"

master_doc = "index"

# The full version, including alpha/beta/rc tags
release = "0.15.0"


# -- General configuration ---------------------------------------------------

extensions = []

# templates_path = ["_templates"]

language = "it"

exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

# -- Options for HTML output -------------------------------------------------

html_theme = "sphinx_rtd_theme"

# html_static_path = ["_static"]
