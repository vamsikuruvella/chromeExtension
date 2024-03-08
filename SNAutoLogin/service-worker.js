console.log("ReddenPage Line 1");
function reddenPage() {
    //console.log("ReddenPage Line 2");
    //document.body.style.backgroundColor = 'red';
    const urll=window.location.href;
    console.log(urll);
    if(urll.includes("https://developer.servicenow.com/dev.do")){
      window.location.href="https://signon.service-now.com/x_snc_sso_auth.do?pageId=username";
      document.getElementById("email").value="kuruvellasaivamsi@gmail.com";
      document.getElementById("username_submit_button").click();
    }
    else if(urll.includes("https://signon.service-now.com/x_snc_sso_auth.do?pageId=password")){
      document.getElementById("password").value="Santhu@1234";
      document.getElementById("password_submit_button").click();
    }
  }
  
  chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes('chrome://')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: reddenPage
      });
    }
  });