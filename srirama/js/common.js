function save_local_storage(keyname,keyvalue)
{
	if (typeof(Storage) != "undefined") {
       // Store
       localStorage.setItem(keyname, keyvalue);
	   return true;
       // Retrieve
       //alert(localStorage.getItem(keyname));
    } else {
       alert("Sorry, your browser does not support Web Storage...");
    }
}

function get_local_storage(keyname)
{
	if (typeof(Storage) != "undefined") {
       return localStorage.getItem(keyname);
    } else {
       alert("Sorry, your browser does not support Web Storage...");
    }
}

function logoutuser()
{
	localStorage.clear();
	window.location = "index.html";
}