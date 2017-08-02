---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
section_id: home
works:
  - image: images/articles/andrew-neel-117763-350.jpg
    class: [graphic-design,test-info]
    title: Beautiful Girl
    desc: "Design &amp; Development"
    link: design/2015/03/26/the-start
  - image: images/articles/ben-white-131241-700.jpg
    class: web-design print
    title: Look at me
    desc: "Design &amp; Development"
  - image: images/articles/ilya-pavlov-87438-350.jpg
    class: brand wide
    title: Am I cute
    desc: "Design &amp; Development"
  - image: images/articles/jakob-owens-142078-350.jpg
    class: development
    title: Umbrella
    desc: "Design &amp; Development"
  - image: images/articles/jeff-sheldon-264922-350.jpg
    class: print brand
    title: Canned Bros
    desc: "Design &amp; Development"
  - image: images/articles/rick-tap-110126-350.jpg
    class: web-design
    title: Hale
    desc: "Design &amp; Development"
  - image: images/articles/teddy-kelley-181683-350.jpg
    class: web-design wide
    title: A beautiful day
    desc: "Design &amp; Development"
  - image: images/articles/teddy-kelley-181683-350.jpg
    class: web-design wide
    title: A beautiful day
    desc: "Design &amp; Development"
  - image: images/articles/jakob-owens-142078-350.jpg
    class: development
    title: Umbrella
    desc: "Design &amp; Development"
  - image: images/articles/jeff-sheldon-264922-350.jpg
    class: print brand
    title: Canned Bros
    desc: "Design &amp; Development"
  - image: images/articles/rick-tap-110126-350.jpg
    class: web-design
    title: Hale
    desc: "Design &amp; Development"
  - image: images/articles/teddy-kelley-181683-350.jpg
    class: web-design wide
    title: A beautiful day
    desc: "Design &amp; Development"
---

<div class='mod modMasonryGallery'>
  <ul class='gallery'>
    {% for work in page.works %}
      <li class="item">
        <a href='{{work.link}}'>
          <img alt="" src="{{work.image}}" />
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
