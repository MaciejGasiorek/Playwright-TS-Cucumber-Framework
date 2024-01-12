module.exports={
    "default": {
        "tags":process.env.npm_config_TAGS || "",
        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "paths": ["src/test/features/"+ process.env.npm_config_FEATURE ||""], 
        "dryRun": false,
        "require": [
            "src/test/steps/*.ts",
            "src/support/hooks/hooks.ts"
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