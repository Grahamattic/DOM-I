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

// Update the h1 heading.

    // Style the h1 parent div.
    ctaDiv = document.querySelector(".cta-text"); 
    ctaDiv.style.margin = "auto";

    // Grab the h1 heading tag.
    const h1 = document.querySelector("h1");
    // Enter h1 heading with break tags.
    document.querySelector("h1").innerHTML += "DOM";
    document.querySelector("h1").innerHTML += "<br>";
    document.querySelector("h1").innerHTML += "IS";
    document.querySelector("h1").innerHTML += "<br>";
    document.querySelector("h1").innerHTML += "AWESOME";

// Update the button text.
    // Grab the button.
    const button = document.querySelector("button");
    // Update the button text.
    button.textContent = "Get Started";

// Main Content Section

    // Top Content Section
        // Grab the .top-content h4 tags.
        let mainTopTextH4 = document.body.querySelectorAll(".main-content .top-content .text-content h4");
            // Update the first .top-content h4 heading.
            mainTopTextH4[0].textContent = siteContent['main-content']["features-h4"];
            // Update the second .top-content h4 heading.
            mainTopTextH4[1].textContent = siteContent['main-content']["about-h4"];
        // Grab the .top-content p tags.
        let mainTopTextP = document.body.querySelectorAll(".main-content .top-content .text-content p");
            // Update the first .top-content paragraph.
            mainTopTextP[0].textContent = siteContent['main-content']["features-content"];
            // Update the second .top-content paragraph.
            mainTopTextP[1].textContent = siteContent['main-content']['about-content'];

