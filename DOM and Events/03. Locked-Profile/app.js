function lockedProfile() {

    let buttons = document.querySelectorAll("button");

    let profiles = [];

    for (const button of buttons) {
        button.addEventListener("click", showMoreInfo);
    }



    function showMoreInfo(event)
    {
        let button = event.target;
        let profile = button.parentElement;
        let children = Array.from(profile.children);
        let userInfo = children[9];
        let buttonInfo = children[10].innerText;

        let lockState = profile.querySelector('input[type="radio"]');
        console.log(lockState)
        if(!lockState.checked && buttonInfo == "Show more")
        {
            children[10].innerText = 'Hide it';
            userInfo.style.display = 'block';
        }

        if(!lockState.checked && buttonInfo == "Hide it")
        {
            children[10].innerText = 'Show more';
            userInfo.style.display = 'none';
        }
    }
}
