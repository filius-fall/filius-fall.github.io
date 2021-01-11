---
published: true
---
In this post I will try to explain how I used $emit, I didn't know before can be used in that way. By building a project I am learning lot how much there is a difference between theory and practical. I thought I know VueJs well when I read the entire Documentation but when I was left alone to build on my own I didn't able to use 70% of Vue features(which I hadn't even thought about existing).This project is making me realise importance of a guidance of expert, even though there are many self-taught great programmers I think most of them had at some point had some interaction with a expert. If not they truly are gifted.



Now i will tell you about how I used $emit to update a table list of entries from database at the instant they are added.

***P.S***: Read my previous post to get an idea of how I structured my app

![Layout Image]({{ site.url }}/assets/01.png)



This is my app layout. It isnt pretty now but it is still work in progress. Now when I click open Modal it will open a Modal like this.

![Modal image]({{site.url }}/assets/02.png)

So now when i add details and submit the table should automatically add new row without refreshing. So what I did was ***emit*** a event when i submit and catch the event to automatically add it to table.



in add.js

```vue
methods: {

​        addStudent(){

​            console.log('inside additmes');

​            var myDict = {};



​            myDict['name'] = this.record.name;

​            myDict['amount'] = this.record.amount;

​            myDict['joindate'] = this.record.joindate;

​            myDict['totalclasses'] = this.record.totalclasses;

​            myDict['id'] = this.record.id + 1;

​            if(myDict['name'] === ""){

​                this.dbvalue = [];
​                return;

​            }

​           this.dbvalue.push(myDict);

            const jsonformat = JSON.stringify(this.dbvalue);

​            studentDB.setItem('details',jsonformat).then(() => {
​                this.$root.$emit('Add::Student',jsonformat);
				 this.$root.$emit('exit',true);

​            })



​        },
```

Now look at the end when the details are set we emit an event called "Add::Student" to root element since they aren't parent and child components. If they were parent and child components we could have communicated using props if parent want child's data, but we child wants parent data we still have to $emit but only to $parent not to root.

So now in list.js we listen to this event by using $root.$on

in list.js

 

```vue
 created(){
        this.populateStudents();
        this.settingDetails();
        this.$root.$on('Add::Student',()=>{
            console.log('Emit recieved'); 
            this.populateStudents();
            
        });

    },

     methods : {
        populateStudents(){
            studentDB.getItem('details').then((data)=>{
                this.studentsList = JSON.parse(data);
                
            })    
        },
```

We need to use this in the created because we should know the changes immediately when the component is created.

***Note***: This is personal mistake I forgot that mounted(), created() and remaining life cycles are just functions that will execute according to their name so the scope will be applied to them so please be aware of the data variables you create during them like var new_entry cant be accessed across the Application.



So now when i submit the form the 'Add::Student' is emitted and listened and populateStudents() is executed when it did 

Did you notice how the name of $emit looks. I found out it was some kind of convention that most use to know the Code reader that it was a event.

---------------------------------------------------------



This is it for today.

Thank you for reading my post and hope you like my post.

If you have any queries or wanted to point out my mistakes in code or my writing or do you want to contact me. Please email to filiusfall@gmail.com.
