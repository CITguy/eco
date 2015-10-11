/* =========================
  COLORS
========================= */
{% for section,colors in data.Colors -%}
/* {{ section }} */
{% for key,val in colors -%}
@@{{key}}: {{val}};
{% endfor -%}
{% endfor %}

/* =========================
  TYPOGRAPHY
========================= */
{% for key,val in data.Type -%}
@@typo-{{key}}: {{val|safe}};
{% endfor %}

/* =========================
  LAYOUT
========================= */
{% for key,val in data.Layout -%}
@@layout-{{key}}: {{val}};
{% endfor %}

/* =========================
  COMMON
========================= */
{% for key,val in data.Common -%}
@@{{key}}: {{val}};
{% endfor %}

/* =========================
  ATOMS
========================= */
{% for atom,styles in data.Atoms -%}
/* {{atom}} */
{% for key,val in styles -%}
@@{{atom}}-{{key}}: {{val}};
{% endfor -%}
{% endfor %}
