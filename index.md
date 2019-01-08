---
layout: default
BGImg: img/bg__home.jpg
---

<section class="s__full d-flex align-items-center justify-content-center">
  {% include general/bgImg.md %}
  <div class="s__full_content">
    <div class="container">
      <h1 class="h1">{{ site.title }} design</h1>
      <div class="hero">
        <p class="hero_title">{{ site.data.general.homeHero }}</p>
        <a href="#" class="btn">{{ site.data.general.btnType1 }}</a>
      </div>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="row">
      <div class="col col-md-8 offset-md-2">
        {% for item in site.data.home.homeCArdsTitle %}
          <h2 class="h2">{{ item.title1 }} <span class="accent">{{ site.title }}</span> {{ item.title2 }}</h2>
          <p class="h2_subtitle">{{ item.subtitle }}</p>
        {% endfor %}
      </div>
    </div>
    <div class="row">
      {% for item in site.data.home.homeCArds %}
        <div class="col-12 col-md-6 col-xl-4 d-flex align-items-center flex-wrap">
          <div class="cards">
            <div class="cards_images d-flex align-items-center justify-content-center">
              <img class="cards_images_img" src="{{ item.img }}" alt="{{ item.alt }}">
            </div>
            <h4 class="h4">{{ item.title }}</h4>
            <p class="cards_text">{{ item.text }}</p>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
<section>
  {% for item in site.data.home.imageSection %}
    <div class="imageSection d-flex flex-wrap">
      <div class="imageSection_wrap">
        <img src="{{ item.img }}" alt="{{ item.alt }}" class="imageSection_wrap_img">
      </div>
      <div class="imageSection_wrap imageSection_wrap_text d-flex align-items-center flex-wrap">
        <div class="">
          <h2 class="h2">{{ item.title }}</h2>
          {% for list in item.description %}
            <p class="imageSection_wrap_subtitle">{{ list.text }}</p>
          {% endfor %}
          <a href="#" class="btn">{{ site.data.general.btnType2 }}</a>
        </div>
      </div>
    </div>
  {% endfor %}
</section>
<section class="section">
  <h2 class="h2">{{ site.data.home.filtersTabTitle }}</h2>
  <div class="filters">
    {% for item in site.data.home.filtersTab %}
      <li data-filter="{{ item.filter }}" class="filters_list">{{ item.name }}</li>
    {% endfor %}
  </div>
  <div class="sets d-flex flex-wrap">
    {% for item in site.data.home.filtersTabList %}
      <div class="sets_list {{ item.filterNames }}" >
        <img class="sets_list_img" src="{{ item.img }}" alt="{{ item.alt }}">
        <div class="sets_list_text">
          <div>
            <h3 class="h3">{{ item.title }}</h3>
            <p>{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</section>
<section class="section">
  {% for item in site.data.home.homeAction %}
    <img src="{{ item.img }}" alt="{{ item.alt }}" class="maskImg_bg">
    <div class="maskBg"></div>
    <div class="container">
      <div class="row">
        <div class="col d-flex align-items-center flex-wrap justify-content-around">
          <h3 class="h3">{{ item.text }}</h3>
          <a href="#" class="btn">{{ site.data.general.btnType1 }}</a>
        </div>
      </div>
    </div>
  {% endfor %}
</section>
<section class="section">
  <div class="container">
    <div class="row">
      <div class="col col-md-8 offset-md-2">
        {% for item in site.data.home.homeTeam %}
          <h2 class="h2">{{ item.title1 }} <span class="accent">{{ item.titleAccent }}</span> {{ item.title2 }}</h2>
          <p class="h2_subtitle">{{ item.subtitle }}</p>
        {% endfor %}
      </div>
    </div>
    <div class="row">
      {% for item in site.data.home.homeTeamList %}
        <div class="col-md-4 col-sm-6 col-12">
          <div class="team">
            <img src="{{ item.img }}" alt="{{ item.alt }}" class="team_img">
            <p class="team_subtitle">{{ item.subtitle }}</p>
            <h4 class="h4">{{ item.title }}</h4>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
<section class="section carousel">
  <img src="{{ site.data.home.TestimonialsBG }}" alt="alt" class="maskImg_bg">
  <div class="maskBg"></div>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="h2">{{ site.data.home.TestimonialsTitle }}</h2>
        <div class="carousel_slider">
          {% for item in site.data.home.Testimonials %}
            <div class="carousel_slider_slide">
              <div class="row d-flex align-items-center">
                <div class="col-md-3 col-12">
                  <img src="{{ item.img }}" alt="{{ item.alt }}" class="carousel_slider_slide_img">
                  <p class="carousel_slider_slide_author">{{ item.title }}</p>
                  <p class="carousel_slider_slide_subauthor">{{ item.subtitle }}</p>
                </div>
                <div class="col-md-9 col-12">
                  <p class="carousel_slider_slide_text">"{{ item.text }}"</p>
                </div>
              </div>
            </div>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="row">
      {% for item in site.data.home.ContactInfo %}
        <div class="col-sm-4 col-12">
          <div class="contactInfo">
            <img src="{{ item.img }}" alt="{{ item.alt }}" class="contactInfo_img">
            <h4 class="h4">{{ item.title }}</h4>
            <p class="contactInfo_subtitle">{{ item.subtitle }}</p>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
