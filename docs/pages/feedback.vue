<template>
    <div v-container>
        <h1>Feedback</h1>
        <p>Feedback is crucial for the user to know that what he has done has have some effect.</p>

        <h2>Toast</h2>
        <p>
            Toasts are meant to provide simple feedback. For example,
            'Your project has been saved'. 
        </p>


    <textarea v-verbatim>
         <a-button @click.native="$refs.myToast.show()" :variant="'primary'" >Show Toast</a-button>
        
        <a-toast ref='myToast'>
            This is my first toast!
        </a-toast>
    </textarea>

    
    <p>Leads to </p>    
    
    <div class="example-content">
        <a-button @click.native="$refs.myToast.show()" :variant="'primary'" >Show Toast</a-button>
        
        <a-toast ref='myToast'>
            This is my first toast!
        </a-toast>
    </div>

    </div>
</template>


