console.log("ReddenPage Line 1");
function reddenPage() {
    //console.log("ReddenPage Line 2");
    //document.body.style.backgroundColor = 'red';
    const urll=window.location.href;
    console.log(urll);
    if(urll.includes("https://developer.servicenow.com/dev.do")){
      window.location.href="https://signon.service-now.com/x_snc_sso_auth.do?pageId=username";

    }
else if(urll.includes("https://signon.service-now.com/x_snc_sso_auth.do?pageId=username")){
      //document.getElementById("password").value="Santhu@1234";
      //setTimeout(resolveInner, 100);
if(document.getElementById("email").value==""){
      document.getElementById("email").value="kuruvellasaivamsi1@gmail.com";
      }
      setTimeout(function() {
        document.getElementById("username_submit_button").click();
    }, 500);
    }    

else if(urll.includes("https://signon.service-now.com/x_snc_sso_auth.do?pageId=password")){
      //document.getElementById("password").value="Santhu@1234";
      //setTimeout(resolveInner, 100);
if(document.getElementById("password").value==""){
      document.getElementById("password").value="Sri@2kanth";
      }
      setTimeout(function() {
        document.getElementById("password_submit_button").click();
    }, 500);
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