const sidebar = require('./config/sidebar/')
module.exports = {
  "title": "Jzt's blog",
  "description": "Welcome to Jzt's Blog.",
  "dest": ".vuepress/dist",
  "base": "/blogspace/",
  "plugins": [
      [
      "meting", {
        meting: {
          auto: "https://music.163.com/#/playlist?id=473093384"
        },
        aplayer: {
          lrcType: 0 	//禁用歌词显示
        },
        mobile: {		// 移动端设置
          cover: false // 取消封面覆盖
        }
      }
    ],
    //复制插件
    [ // https://www.npmjs.com/package/vuepress-plugin-nuggets-style-copy
      "vuepress-plugin-nuggets-style-copy", {
        copyText: "copy",
        tip: {
          content: "复制成功!"
        }
      }
    ],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
  ],
  
  ["vuepress-plugin-boxx"],
  ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
    }
}]
  ],
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    activeHeaderLinks: true,
    noFoundPageByTencent: false,
    sidebar,
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/JiangZhengtao1",
            "icon": "reco-github"
          }
        ]
      }
    ],
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/vx.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Jzt",
    "authorAvatar": "/vx.jpg",
    "record": "湘ICP备2020020205号",
    "recordLink": 'http://beian.miit.gov.cn/',
    //"cyberSecurityRecord": '豫公网安备41172602000151号',
    //"cyberSecurityLink": 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41172602000151',
    "startYear": "2020",
    valineConfig: {
      appId: 'bhSHPmj1eH9goOJ8xVx8bNI6-gzGzoHsz',
      appKey: 'Mzqq9RIoBbJ8vJ2VY1PWPM6T'
    }
  },
  "markdown": 
  {
    "lineNumbers": true
  }
}