1) Which of the following is the correct syntax for selecting all the div tags on the page:

a. $(div)

b. $(#div)

c. $(.div)

***answer d. None are correct***

---

2) What is selected by the following selector: $(".tag")

***answer a. All tags with a class of "tag"***

b. All tags with no class set

c. The tag with an ID of "tag"

d. None are correct

---

3) Which of the following jQuery statements will cause an alert() with the content of 'Clicked the abc button' when a button with the ID of 'abc' is double clicked?

a. $("button#abc").click(function() { alert('Clicked the abc button'); });

b. $("button").dblclick(function() { alert('Clicked the abc button'); });

c. $("button:abc").dblclick(function() { alert('Clicked the abc button'); });

***answer d. None of the above***

---

4) Which of the following jQuery statements will remove only the hover() event from an image tag that is contained in a div with an ID of 'content'?

***answer a. $(div#content image).unbind("hover");***

b. $(div#content image).remove("hover");

c. $(div#content image).bind("hover");

d. None of the above

---

5) What is the best definition for event delegation in jQuery?

a. Event delegation allows us to attach a single event listener, to multiple elements, that will fire for a selector.

b. Event delegation allows us to attach multiple event listeners, to a parent element, that will fire for some descendants matching a selector,
 whether those descendants exist now or are added in the future.

***answer c. Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.***

d. None are accurate definitions of event delegation

---

6) Which jQuery statement will cause each button clicked to become hidden?

a. $("body").on("click", "hide", function() { $(button).hide(); });

b. $("body").on("button", "click", function() { $(this).exec(); });

***answer c. $("body").on("click", "button", function() { $(this).hide(); });***

d. None of the above.

---

7) Which of the following jQuery statements replaces the current contents of a div control with an ID of 'login' with a button with an ID of 'submit' with text of 'Login'?

a. $("div#login").append('Login');

b. $("div#login").add('Login');

c. $("div#login").html('Login');

***answer d. None of the above***

---

8) Which of the following jQuery statements adds a label control to the end of the content of a paragraph tag that has a class of 'message'?

a. $("p,message").append('Update Successful!');

b. $("p.message").add('Update Successful!');

c. $("p#message").html('Update Successful!');

***answer d. None of the above***

---

9) Which jQuery statement sets the text of a button control to 'Save'?

a. $("button").val("Save");

b. $("button").txt("Save");

***answer c. $("button").text("Save");***

d. None of the above

---

10) Which jQuery statement sets the selected value of a list control to the item with the value of 'college'?

a. $("list").val("college").change();

b. $("list").text("college").change();

c. $("select").val("college").change();

d. $("select").text("college").change();

***answer e. None of the above***

---

11) Which of the following jQuery statements will move a div with a class of 'content' to a div with ID of 'left'?

a. $(".content").appendTo("#left");

b. $(".content").append("#left");

***answer c. $(".content").moveTo("#left");***

d. None of the above

---

12) Which of the following jQuery statements will move a label with ID of 'message' to the end of a paragraph with ID of 'content'.

a. $("label#message").append("p#content");

b. $("label#message").moveTo("p#content");

***answer c. $("label#message").appendTo("p#content");***

d. None of the above
