const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
    let logo = document.getElementById("logo-img");
    logo.setAttribute('src', siteContent["nav"]["img-src"])

    logo.setAttribute('src', siteContent["nav"]["img-src"])


// Update the img src for the cta image.
    // Grab the cta image.
    let ctaImg = document.getElementById("cta-img");
    // Update the img src for the cta image.
    ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Update the img src for the middle image.
    // Grab the middle image.
    let middleImg = document.getElementById("middle-img");
    // Update the img src for the middle image.
    middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Header Navigation
    // Grab all of the anchor tags in the header nav bar.
    let headerNav = document.querySelectorAll("a");
        // Update header nav bar.
        headerNav[0].textContent = siteContent["nav"]["nav-item-1"];
        headerNav[1].textContent = siteContent["nav"]["nav-item-2"];
        headerNav[2].textContent = siteContent["nav"]["nav-item-3"];
        headerNav[3].textContent = siteContent["nav"]["nav-item-4"];
        headerNav[4].textContent = siteContent["nav"]["nav-item-5"];
        headerNav[5].textContent = siteContent["nav"]["nav-item-6"];
    // Add two new header nav links.
        // Prepend one link to the beginning of the nav list.
        // Grab the parent element.
        let parentElement = document.querySelector('nav');
            // Create a new link called "Home"
            let home = document.createElement('a');
            home.textContent = "Home";
            // Prepend the Home link to the beginning of the nav list.
            parentElement.prepend(home);
        // Append one link to the end of the nav list.
            // Create a new link called "blog".
            let blog = document.createElement('a');
            blog.textContent = "Blog";

            // Append the Blog link to the end of the nav list.
            parentElement.appendChild(blog);
            // Grab all of the anchor tags in the updated header nav bar.
            let newHeaderNav = document.querySelectorAll("a");
                // Change the color of the updated header nav links to green.
                newHeaderNav.forEach(element=>{element.style.color="green"});

