window.onload = () => {
    var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation){
            // we dont want to target and innerText to be null so compulsory 
            if(mutation.target && mutation.target.innerText && mutation.target.innerText.indexOf('Skip Ad') != -1){
                mutation.target.click();
                console.log("Ad skipped.")
            }
        })
    });
// here we are going to tell where we have to observe mutation 
// first attribute of observe function is for checking where the observer observes changes i.e doc body in below and 2nd attribute are what changes will consider to get 
// callback 
mutationObserver.observe(document.body, { attributes: true, childList: true, subtree: true, characterData: true});
}

