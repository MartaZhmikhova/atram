<header class="header">
  <nav>
    <div class="container">
      <div class="row">
        <div class="col d-flex justify-content-between align-items-center">
          {% for item in site.data.general.logo %}
            <a href="{{ site.baseurl }}{{ item.href }}" class="logo">
              <img src="{{ item.logo }}" alt="{{ item.alt }}" class="logo_img"/>
            </a>
          {% endfor %}
          <ul class="menu d-md-flex align-items-center">
            {% for item in site.data.general.menu %}
              <a class="menu_link" href="{{ site.baseurl }}{{ item.href }}">{{ item.name }}</a>
            {% endfor %}
          </ul>
          <div class="burger">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
        </div>
      </div>
    </div>
  </nav>
</header>
