var myGreeting = document.getElementById("my-greeting").innerHTML;

var greetingTemplate = Handlebars.compile(myGreeting);

var greeting = greetingTemplate({name: "Blake"});

document.getElementById("greeting").innerHTML += greeting;

var myDigest = document.getElementById("my-digest").innerHTML;

var digestTemplate = Handlebars.compile(myDigest);

var digest = digestTemplate({
  subreddits: [
    {
      name: "funny",
      posts: [
          {
            imageurl: "https://i.redd.it/2th9kwhykmx41.jpg",
            ups: "45054",
            title: "I found it guy! I found it!"
          }
      ]
    }
  ]});

document.getElementById("greeting").innerHTML += digest;
