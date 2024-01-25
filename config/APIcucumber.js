module.exports={
    "default": {
        "tags":process.env.npm_config_TAGS || "",
        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "paths": ["src/API/Features/Products.feature"], 
        "dryRun": false,
        "require": [
            "src/API/Steps/*.ts"
      
        ],
      
        "requireModule": [
            "ts-node/register"
        ],
        "format": [
            "progress-bar",
            "html: reports/cucumber-report.html"
        ]

        
    }
  
}