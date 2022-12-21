$('ul.year li').click(function(e) { 
   if (e.target.innerText == 2019) {
      document.getElementById('playlist-container').innerHTML = 
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/january-2019-bops/pl.u-WabZlg3udrMvBzx"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/march-2019-bops/pl.u-jV89aqkTdv4qrPM"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/february-2019-bops/pl.u-gxblMKlu5DpMN2k"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/april-2019-bops/pl.u-jV89amLCdv4qrPM"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/may-2019-bops/pl.u-kv9l0qDC79oWBMN"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/june-2019-bops/pl.u-oZylK41IRZk08md"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/july-2019-bops/pl.u-xlyNADNIk32pbZl"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/august-2019-bops/pl.u-oZylKdZtRZk08md"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/september-2019-bops/pl.u-8aAVzl6soPpaBED"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/october-2019-bops/pl.u-oZylKz1tRZk08md"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/november-2019-bops/pl.u-NpXmDvkIm1Ep2Jk"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/december-2019-bops/pl.u-GgA59gbSZR58Jvj"></iframe>`;
   } else if (e.target.innerText == 2020) {
      document.getElementById('playlist-container').innerHTML = 
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/january-2020-bops/pl.u-gxblYx1I5DpMN2k"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/february-2020-bops/pl.u-GgA59DztZR58Jvj"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/march-2020-bops/pl.u-KVXBqB6CZ26mapX"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/april-2020-bops/pl.u-oZyl4ygtRZk08md"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/may-2020-bops/pl.u-oZyl4optRZk08md"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/june-2020-bops/pl.u-GgA5zM5HZR58Jvj"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/july-2020-bops/pl.u-kv9lD6Vt79oWBMN"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/august-2020-bops/pl.u-oZylYeWCRZk08md"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/september-2020-bops/pl.u-KVXBv41TZ26mapX"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/october-2020-bops/pl.u-WabZ1aacdrMvBzx"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/november-2020-bops/pl.u-WabZ12jhdrMvBzx"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/december-2020-bops/pl.u-WabZ167FdrMvBzx"></iframe</div>>`;
   } else if (e.target.innerText == 2021) {
      document.getElementById('playlist-container').innerHTML = 
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/january-2021-bops/pl.u-jV8966NIdv4qrPM"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/february-2021-bops/pl.u-gxblqb0I5DpMN2k"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/march-2021-bops/pl.u-KVXBx5VtZ26mapX"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/april-2021-bops/pl.u-8aAVM6bUoPpaBED"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/may-2021-bops/pl.u-GgA50NZHZR58Jvj"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/june-2021-bops/pl.u-NpXmBo3sm1Ep2Jk"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/july-2021-bops/pl.u-xlyN69PFk32pbZl"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/august-2021-bops/pl.u-kv9lGX5T79oWBMN"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/september-2021/pl.u-xlyN6L3Tk32pbZl"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/october-2021/pl.u-oZyljmYsRZk08md"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/november-2021/pl.u-xlyNG1lFk32pbZl"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/december-2021/pl.u-8aAVE19UoPpaBED"></iframe></div>`;
   } else if (e.target.innerText == 2022) {
      document.getElementById('playlist-container').innerHTML = 
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/january-2022/pl.u-8aAVE21hoPpaBED"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/february-2022/pl.u-GgA5okahZR58Jvj"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/march-2022/pl.u-gxbl8d7C5DpMN2k"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/april-2022/pl.u-jV89ogNsdv4qrPM"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/may-2022-bops/pl.u-kv9lKNmF79oWBMN"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/june-2022/pl.u-KVXBo1VtZ26mapX"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/july-2022/pl.u-oZylqgRsRZk08md"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/august-2022/pl.u-8aAVeGbFoPpaBED"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/september-2022/pl.u-NpXmVq3um1Ep2Jk"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/october-2022/pl.u-NpXmVY4Im1Ep2Jk"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/november-2022/pl.u-jV89jo9Fdv4qrPM"></iframe></div>` +
         `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/december-2022/pl.u-jV89j7JTdv4qrPM"></iframe></div>`;
   }
});

$( "#tabs" ).tabs();

$('ul.replay-year li').click(function(e) { 
   if (e.target.innerText == "2015") {
      document.getElementById('replay-playlist-container').innerHTML = `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/replay-2015/pl.rp-XWWdCyk8P7o1"></iframe></div>`;
   } else if (e.target.innerText == "2016") {
      document.getElementById('replay-playlist-container').innerHTML = `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/replay-2016/pl.rp-E556S30GJ7oj"></iframe></div>`;
   } else if (e.target.innerText == "2017") {
      document.getElementById('replay-playlist-container').innerHTML = `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/replay-2017/pl.rp-9xxQFyzDgbEo"></iframe></div>`;
   } else if (e.target.innerText == "2018") {
      document.getElementById('replay-playlist-container').innerHTML = `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/replay-2018/pl.rp-jddGfJQko9vG"></iframe></div>`;
   } else if (e.target.innerText == "2019") {
      document.getElementById('replay-playlist-container').innerHTML = `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/replay-2019/pl.rp-BooEUbyVYJPo"></iframe></div>`;
   } else if (e.target.innerText == "2020") {
      document.getElementById('replay-playlist-container').innerHTML = `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/replay-2020/pl.rp-P449SYB3noVO"></iframe></div>`;
   } else if (e.target.innerText == "2021") {
      document.getElementById('replay-playlist-container').innerHTML = `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/replay-2021/pl.rp-8AA9cXRj68o3"></iframe></div>`;
   } else if (e.target.innerText == "2022") {
      document.getElementById('replay-playlist-container').innerHTML = `<div id="playlist"><iframe id="scaled-frame" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/replay-2022/pl.rp-755XHR8YDe6V"></iframe></div>`;
   }
});