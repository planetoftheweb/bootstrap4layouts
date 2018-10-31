
# bootstrap4layouts
![Bootstrap 4 Layouts](https://media.licdn.com/media-proxy/ext?w=1200&h=675&f=n&hash=pTXYziX2dSfQCusCiimqQQFchJ8%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6plxVUzgUv5K_PrkC9q0RIUJDPBy-lWiKs_tefZHbuf8PdZLSioloUfC8HkgAwe-ugQDfmGo69LcLmY4Yx3A)

This repository is a template for building responsive websites for Bootstrap 4. It's based on a course I built for LinkedIn learning called [Bootstrap 4 Layouts: Responsive Single-Page Design](https://www.linkedin.com/learning/bootstrap-4-layouts-responsive-single-page-design/creating-a-bootstrap-4-layout?u=104).

There are several different layouts available:

- Column Based
- Media
- Grid
- Carousel
- Nested
- Icons
- Floater
- Cards

## Structure of Layouts

Each is designed to showcase a different aspect of how Bootstrap Layouts work. Here's a code sample from the Floater Layout:

```
  <article id="page-floater" class="page-section vertical-padding">

    <section class="layout-floater container text-reverse">
      <div class="row align-items-center justify-content-center">

        <div class="col-8 col-md-4 img-container">
          <img class="layout-image img-fluid" src="http://planetoftheweb.com/i/phone.svg" alt="Photo Sample">
        </div>

        <div class="col-10 col-md-6 align-self-center">
          <div class="my-5 text-center text-md-left pl-md-5">
            <h2 class="layout-title">Floater Title</h2>
            <p class="layout-text ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis fuga ex delectus sunt natus doloremque praesentium
              aspernatur, totam tempora officia, sed fugit? Libero voluptatem nulla mollitia, amet dolor iste magni.</p>
          </div>
        </div>

      </div>
    </section>

  </article>
```

Each layout is in it's own `<article>` tag, which begins a layout and has an id with the `page-` prefix.
Most layouts (not the floater layout) also have an optional `<header>`. They sholuld be self explanatory.

I'd love to see some Pull Requests with additional layouts.

