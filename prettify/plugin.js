mbrApp.registerPlugin("deltapi-prettify", {
    name:"prettify",
    priority: 2E3,	
	files:[   
	{
        type: "css", src: "sunburst.css", publishOnly: !0 
    }
    , 
	{
        type: "js", src: "prettify.js", publishOnly: !0 
    }
    ]
});
