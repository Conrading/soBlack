# Ethereum test

> by Silex Oasis

> 2020 April

#### Project setup
``` node
$ npm install
```

#### Compiles and hot-reloads for development
```
$ npm run serve
```

#### Compiles and minifies for production
```
$ npm run build
```

#### Lints and fixes files
```
$ npm run lnit
```

## Explanation

* Frontend in `src` folder includes several parts:
    1. using `videojs` to display video file, the start time can be adjusted depends on request;
    2. sound file is merely playing via relevant html code, also start time and volume can be adjusted;
    3. `axios` is the frame used here for storing/accessing data;
    4. `blockchain` is the last part of the code, which adopting Etheruem;   


* Backend is mainly within [nodejs](./nodejs/README.md) folder


* Php file in `api` folder can be alternative MySQL option


* Folder `participantContract` stores smart contract relevant files 

#### Play Syntax


There are several options to **display video**, which can also refer to this [link]( https://docs.videojs.com/tutorial-player-workflows.html#dealing-with-the-source-or-the-poster-on-the-player)


1. Option 1 by ref
``` javascript
    <html>
        <video ref="videoPlayer" class="video-js vjs-default-skin vjs-16-9" data-setup="{}"></video>
    </html>
    <script>
    const videoDisplay = this.$refs.videoPlayer;
    videojs(videoDisplay, {
        autoplay: true, 
        loop: true, //video will auto play after finished
        preload: 'auto',
        aspectoRatio: '16:9',
        bigPlayButton: false,
        textTrackDisplay: false,
        posterImage: false,
        errorDisplay: false,
        controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: true
          },
        width: '450',
        height: '600',
        source: [
            {
                type: 'video/mp4',
                src: 'http://'
            }
        ],
      }, function () {videoDisplay.play()})
    </script>
```
2. Option 2 by ref
``` javascript
    <html>
        <video ref="videoPlayer" class="video-js vjs-default-skin vjs-16-9" data-setup="{}"></video>
    </html>
    <script>
        const videoDisplay = this.$refs.videoPlayer
        videojs(videoDisplay, function () {videoDisplay.currentTime = 10; videoDisplay.play()})
    </script>
```
3. Option 3 by id
``` javascript
    <html>
        <video id="videoPlayer" class="video-js vjs-default-skin vjs-16-9" data-setup="{}">
            <source src='https://www.youtube.com/watch?v=Y-iVuV__cD8'>
        </video>
    </html>
    <script>
        //var localVideo = document.getElementById("videoPlayer");
        this.localVideo = videojs(document.getElementById("videoPlayer"), { "techOrder": ["youtube", "hls","flash","html5"]}, function () {})
    </script>
```

4. Option 4 [YouTube](https://github.com/videojs/videojs-youtube) play by ref
``` javascript
    <html>
        <video ref="videoPlayer" class="video-js vjs-default-skin vjs-16-9" data-setup="{}">
            <source src='https://www.youtube.com/watch?v=wNeOGGzFP24'>
        </video>
    </html>
    <script>
        const videoDisplay = videojs(this.$refs.videoPlayer);
        videoDisplay01.play();
    </script>
```
> Alternative for YouTube insert source within <script>

``` javascript
    <script>
    this.youtubePlayer = videojs(
        document.getElementById("youtube-video"), 
        {"techOrder": ["youtube", "html5"], 
        "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=hGW4b28wF80"}]}, 
        function () {})
    </script>
```
> mount YouTube CSS as below

``` javascript
      let minYoutuBer = document.createElement('script');
      minYoutuBer.setAttribute('src',"./dist/youtube.min.js");
      minYoutuBer.async = true;
      document.head.appendChild(minYoutuBer);

      let minYoutuBerNode = document.createElement('script');
      minYoutuBerNode.setAttribute('src',"../node_modules/video.js/dist/video-js.min.css");
      minYoutuBerNode.async = true;
      document.head.appendChild(minYoutuBerNode);
```

There are several options to **play sound**

1. Option 1 straight play by id
``` javascript
    <html>
      <audio id="Sound" controls autoplay preload="auto">
        <source src="./folder/file">
      </audio>
    </html>
    <script>
        var soundTrack = document.getElementById("Sound");
        soundTrack.play(soundTrack.currentTime = 20, soundTrack.volume = 0.5);
    </script>
```
#### Scrolling 

* The search page adopts code [link]( https://www.npmjs.com/package/vue-virtual-scroll-list)

* Files in `line` folder is functioned as database

### Frontend required package
```
$ npm install video.js
```
```
$ npm install --save videojs-contrib-hls
```
```
$ npm install bootstrap-vue
```
```
$ npm install vue-router
```
```
$ npm install web3@1.2.6 
```
> python [2.7](https://askubuntu.com/questions/981118/correct-way-to-install-python-2-7-on-ubuntu-17-10) might be required; further information please refer to [2 — Install Web3](https://medium.com/b2expand/install-web3-fc96b885a7b)
```
$ npm install axios
```
```
$ npm install vue-virtual-scroll-list
```



