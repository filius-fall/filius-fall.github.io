Past two days are very productive for me. I Learnt a lot. The most important thing is how to really use Vue components.

From my understanding Components serve a great purpose in partitioning the project into many pieces. Like i am working on an app for my sister, so that she can organise her students and register students for her online music classes. Actually my brother-in-law is making me do this, it was his idea all along. So now coming back to Vue.

In index.html

```html
	<body>
    	    <div id="app">
            </div>
            <script src="js/add.js"></script>
            <script src="js/list.js"></script>
            <script src="js/main.js"></script>
	</body>
```

add.js , list.js contain the components of adding new students component and list view component respectively and both components are used in the main.js to show those component templates.

***Important Point***: Always the index.html should only contain what div has that means nothing. In other words all the HTML should be written in templates of components and should be partitioned according to their functionality like how i did with add.js and list.js.



***Detailed Explination***:

Now lets look at my main.js



```vue
// This is config for our Database using localforage
const StudentDB = localforage.createInstance({
	name = "studentList",
	storename = "students"
});

new Vue({
	el:"#app",
	components:{
		'list-view':listView
	},
	templates:`<list-view></list-view>`

})
```

I registered a component called listView to list-view through components in Vue instance of main.Now in next block of code we will see where that listView came from.

list.js

```vue
let listView = {
		data(){
			return(){
				studentsList : [],
				studentHeader : {
					'name' : 'Student Name',
                    'amount' : 'Fee',
                    'joindate' : 'Date of Join',
                },
				searchList : '',
                addList : [],
            }	
		},
        methods : {
                populateStudents(){
                    studentDB.getItem('details').then((data)=>{
                        this.studentsList = JSON.parse(data);
                
            	})    
        	}
    	},
		template:`
                <div>
					<search-compo></search-compo>
                    <add-compo></add-compo>
                    .....
                </div>`
	}
```

From above we can see that listView in main.js came from this so by writing script tag of list.js in index.html before main.js list loads before main so it gets registered before so it can be used. ***Remember the order*** 

in which they are written in index.html it is very important. The above way of using let is one way to write components there are still other ways i just thought this was cool.

I added studentHeader so that the values in the Object are the one that should appear in the list as First row and remaining details which were named as keys should be automatically aligned with them this was interesting idea my brother-in-law made me implement i will show you how i did in next post.

Observe i again used <search-compo></search-compo> and <add-compo></add-compo> they are also Components written in other js files similar to list.js. Wait i will show them to you.



add.js

```vue
Vue.component('add-compo',{...})
```

This is another way to write a component. In the braces we can write all the properties and template of how it should be. I will show them to you in next post or you can visit [this link](https://github.com/filius-fall/student_registration) . This is my repo in Github account.

<search-compo></search-compo> is also similar to how add.js is written.

This is it for today. Actually i learned a lot and did a lot but i couldnt type all the in one blog so i will try to spread it out. Hope you like my post and follow my further posts in my blog