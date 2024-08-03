(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["unCxCtVR"],{unCxCtVR:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"texts",{enumerable:!0,get:function(){return n;}}),a("m0E7SL4l");let n=[{value:"In the maintenance of antd-mobile, We meet an annoying ghost. It rarely appears when building locally, but it almost always appears in the github workflow. After a lot of tossing, We finally found its trace.",paraId:0},{value:"For antd-mobile's CI, there is a task to check the build artifacts, which will prompt the file size changes. But in recent months, this task often fails to build, as shown in the following figure:",paraId:1,tocIndex:0},{value:"Check the log, we will get the error message of CSS file:",paraId:2,tocIndex:0},{value:"It seems that the error occurred when building 2x style (antd-mobile will generate 2x style for high-definition screen):",paraId:3,tocIndex:0},{value:"[09:44:16] Using gulpfile ~/work/ant-design-mobile/ant-design-mobile/gulpfile.js\n[09:44:16] Starting 'default'...\n[09:44:16] Starting 'clean'...\n[09:44:17] Finished 'clean' after 286 ms\n[09:44:17] Starting 'buildES'...\n[09:44:26] Finished 'buildES' after 8.77 s\n[09:44:26] Starting 'buildCJS'...\n[09:44:27] Finished 'buildCJS' after 1.72 s\n[09:44:27] Starting 'buildDeclaration'...\n[09:44:27] Starting 'buildStyle'...\n[09:44:28] Finished 'buildStyle' after 682 ms\n[09:44:34] Finished 'buildDeclaration' after 6.5 s\n[09:44:34] Starting 'copyAssets'...\n[09:44:34] Finished 'copyAssets' after 2.37 ms\n[09:44:34] Starting 'copyMetaFiles'...\n[09:44:34] Finished 'copyMetaFiles' after 4.64 ms\n[09:44:34] Starting 'generatePackageJSON'...\n[09:44:34] Finished 'generatePackageJSON' after 2.72 ms\n[09:44:34] Starting 'buildBundles'...\n[09:44:45] Finished 'buildBundles' after 11 s\n[09:44:45] Starting 'init2xFolder'...\n[09:44:46] Finished 'init2xFolder' after 811 ms\n[09:44:46] Starting 'build2xCSS'...\n[09:44:46] 'build2xCSS' errored after 126 ms\n[09:44:46] CssSyntaxError in plugin \"gulp-postcss\"\n",paraId:4,tocIndex:0},{value:"The ",paraId:5,tocIndex:0},{value:"style.css",paraId:5,tocIndex:0},{value:" of ",paraId:5,tocIndex:0},{value:"build2xCSS",paraId:5,tocIndex:0},{value:" comes from the artifact of ",paraId:5,tocIndex:0},{value:"buildStyle",paraId:5,tocIndex:0},{value:", so it can be determined that there is a problem in the ",paraId:5,tocIndex:0},{value:"buildStyle",paraId:5,tocIndex:0},{value:" task. After checking the corresponding file ",paraId:5,tocIndex:0},{value:"/lib/bundle/style.css",paraId:5,tocIndex:0},{value:", we found the following content:",paraId:5,tocIndex:0},{value:"The first line of ",paraId:6,tocIndex:0},{value:"style.css",paraId:6,tocIndex:0},{value:" is the compressed style, and then the incomplete uncompressed style. Compared with the successful artifact, it will be found that the style after the second line is unexpected:",paraId:6,tocIndex:0},{value:"Check the uncompressed content, we will find that these contents already exist in the previous compressed content:",paraId:7,tocIndex:0},{value:"It is speculated that the uncompressed content was generated first during the build, and then the compressed operation was performed. But there is an asynchronous problem, the second task started to execute before the first task was completed, resulting in the duplication of content. What's even more bizarre is that if it is an asynchronous problem, the error file content generated on CI is surprisingly consistent. No matter how many times it is built, as long as it fails, it must be the same content.",paraId:8,tocIndex:0},{value:"Check the ",paraId:9,tocIndex:1},{value:"gulpfile.js",paraId:9,tocIndex:1},{value:" file, we found that ",paraId:9,tocIndex:1},{value:"buildStyle",paraId:9,tocIndex:1},{value:" uses vite to build. Considering that it may be a problem with the build version, so we upgraded vite from ",paraId:9,tocIndex:1},{value:"3.x",paraId:9,tocIndex:1},{value:" to ",paraId:9,tocIndex:1},{value:"5.x",paraId:9,tocIndex:1},{value:", but the problem still exists. So check the relevant configuration:",paraId:9,tocIndex:1},{value:"{\n    root: process.cwd(),\n    mode: env,\n    logLevel: 'silent',\n    define: { 'process.env.NODE_ENV': `\"${env}\"` },\n    build: {\n      cssTarget: 'chrome61',\n      lib: {\n        formats,\n        ...\n      },\n      rollupOptions: {\n       output: {\n          dir: './lib/bundle',\n          globals: {\n            'react': 'React',\n            'react-dom': 'ReactDOM',\n          },\n        },\n      },\n      minify: isProd ? 'esbuild' : false,\n    },\n  }\n",paraId:10,tocIndex:1},{value:"Though closing the ",paraId:11,tocIndex:1},{value:"logLevel: 'silent'",paraId:11,tocIndex:1},{value:" configuration, we can see more log content after rebuilding:",paraId:11,tocIndex:1},{value:"We are close. When building, antd-mobile will create three copies of ",paraId:12,tocIndex:1},{value:"es",paraId:12,tocIndex:1},{value:", ",paraId:12,tocIndex:1},{value:"cjs",paraId:12,tocIndex:1},{value:", and ",paraId:12,tocIndex:1},{value:"umd",paraId:12,tocIndex:1},{value:" through ",paraId:12,tocIndex:1},{value:"lib.formats",paraId:12,tocIndex:1},{value:". And each ",paraId:12,tocIndex:1},{value:"format",paraId:12,tocIndex:1},{value:" will generate a ",paraId:12,tocIndex:1},{value:"style.css",paraId:12,tocIndex:1},{value:" file. If it is just to overwrite the file, it should only waste extra build resources, and the compressed ",paraId:12,tocIndex:1},{value:"style.css",paraId:12,tocIndex:1},{value:" will always be overwritten, and there should be no problem of simultaneous overwriting. Let's check the part that calls vite to build:",paraId:12,tocIndex:1},{value:"async function buildBundles(cb) {\n  const envs = ['development', 'production'];\n  const configs = envs.map((env) =>\n    getViteConfigForPackage({\n      env,\n      formats: ['es', 'cjs', 'umd'],\n      external: ['react', 'react-dom'],\n    }),\n  );\n\n  await Promise.all(configs.map((config) => vite.build(config)));\n  cb && cb();\n}\n",paraId:13,tocIndex:1},{value:"That's it. ",paraId:14,tocIndex:1},{value:"Promise.all",paraId:14,tocIndex:1},{value:" is used to build concurrently, and vite's build is asynchronous. This causes a competition problem for ",paraId:14,tocIndex:1},{value:"style.css",paraId:14,tocIndex:1},{value:". The rollup called by vite will clean up the files and then perform write operations. Since the compressed style needs to be uglified, it is always slower than the uncompressed version. When rollup has finished cleaning and starts writing files, although the first part of the uncompressed version is deleted due to cleaning, the subsequent content is still written, while the compressed version starts writing from the beginning. When both are written, an error will occur and the content will be consistent under each CI build. The fix is also very simple, just change it to sequential execution:",paraId:14,tocIndex:1},{value:"for (const config of configs) {\n  await vite.build(config);\n}\n",paraId:15,tocIndex:1},{value:"(Of course, subsequent optimizations are also needed for the script. Skip the unnecessary ",paraId:16,tocIndex:1},{value:"style.css",paraId:16,tocIndex:1},{value:" generation)",paraId:16,tocIndex:1},{value:"With the performance changes of github CI, the ghost that was originally difficult to encounter has become stable and reproducible, which is quite interesting. This also gives us the opportunity to locate the problem.",paraId:17,tocIndex:2}];}}]);
//# sourceMappingURL=unCxCtVR-async.68b12391.js.map