let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");
let bookmarksListContainerEl = document.getElementById("bookmarksListContainer");

let proceed1 = false;
let proceed2 = false;
let formData = {
    siteName: "",
    siteUrl: ""
};

siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
        proceed1 = true;
    }
    formData.siteName = event.target.value;
});

siteUrlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
        proceed2 = true;
    }
    formData.siteUrl = event.target.value;
});

function validateData(formData) {
    if (formData.siteName === "") {
        siteNameErrMsgEl.textContent = "Required*";
    }
    if (formData.siteUrl === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    }
}



function bookmark() {
    bookmarksListContainerEl.classList.add("form-container");
    let bookmarkItemEl = document.createElement("li");
    bookmarkItemEl.classList.add("mb-2");

    let headingEl = document.createElement("h1");
    headingEl.classList.add("name");
    headingEl.textContent = formData.siteName;

    let anchorEl = document.createElement("a");
    anchorEl.classList.add("url");
    anchorEl.setAttribute("href", formData.siteUrl);
    anchorEl.setAttribute("target", "_blank");
    anchorEl.textContent = formData.siteUrl;

    bookmarkItemEl.appendChild(headingEl);
    bookmarkItemEl.appendChild(anchorEl);
    bookmarksListEl.appendChild(bookmarkItemEl);
}

bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateData(formData);
    if (proceed1 && proceed2) {
        bookmark();
    }
});