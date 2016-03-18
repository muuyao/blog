{%
  set js_commons = [
    'src/utils.min.js',
    'src/motion.min.js'
  ]
%}

{% for common in js_commons %}
  <script type="text/javascript" src="{{ url_for(theme.js) }}/{{ common }}?v={{ theme.version }}"></script>
{% endfor %}
