module.exports = {
  "title": "Jzt's blog",
  "description": "海岸，山巅，丛林，博客",
  "dest": ".vuepress/dist",
  "base": "/blogspace/",
  "plugins": [
      [
      "meting", {
        meting: {
          auto: "https://music.163.com/#/playlist?id=3020709484"
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
    ]
    //,['@vuepress-reco/comments', 
    //    {
    //		solution: 'vssue',
    //		options: {
     // 			platform: 'github',
     // 			owner: ' JiangZhengtao1 ',
    //  			repo: 'blogspace',
    //  			clientId: process.env.VSSUEID,
    //  			clientSecret: process.env.VSSUESECRET,
    //		}
  	//	}
    //],
    // ,[
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'valine', 
    //     // options选项中的所有参数，会传给Valine的配置
    //     options: {
    //       el: '#valine-vuepress-comment',
    //       appId: process.env.VALINEID,
    //       appKey: process.env.VALINEKEY
    //     }
    //   }
    // ]
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
    noFoundPageByTencent: false,
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
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
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
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
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
    "record": "xxxx",
    "startYear": "2020",
    valineConfig: {
      appId: 'bhSHPmj1eH9goOJ8xVx8bNI6-gzGzoHsz',
      appKey: 'Mzqq9RIoBbJ8vJ2VY1PWPM6T'
    }
  },
  "markdown": {
    "lineNumbers": true
  }
}