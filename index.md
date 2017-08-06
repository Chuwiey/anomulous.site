---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
section_id: home
---

<div class='modGallery grid'>
  <div class="grid-sizer"></div>
  <ul class='gallery'>
    {% for work in site.data.items %}
      <li class="grid-item {{work.size}}">
        <a href='{{work.link}}'>
          {% if work.youtube %}
            <img alt="" src="https://img.youtube.com/vi/{{work.youtube}}/hqdefault.jpg" />
          {% else %}
            <img alt="" src="{{work.image}}" />
          {% endif %}
          <div class='overlay'>
            <div class='thumb-info'>
              <h3>{{work.title}}</h3>
              <p>{{work.desc}}</p>
            </div>
          </div>
        </a>
        <div class="md-chips">
			{% for category in work.class %}
			<div class="md-chip">
				{{category}}
			</div>
			{% endfor %}
		</div>
      </li>
    {% endfor %}
  </ul>
</div>
