interface Link {
  name: string
  desc: string
  icon: string
  image?: string
  url: string
}

interface Project {
  url: string
  desc: string
  archived: boolean
}

interface FriendLink {
  name: string
  url: string
  desc?: string
  image?: string
}

interface SiteLink {
  name: string
  url: string
  desc?: string
  icon: string
}

interface CategoryLink {
  name: string
  desc: string
  links: Link[]
}

interface NavBarItem {
  name: string
  url: string
  icon: string
}

export function extractGithubLink(url: string) {
  const match = url.match(/github\.com\/(.+)\/(.+)/)
  return match
    ? { user: match[1], repo: match[2] }
    : { user: "Error", repo: "Error" }
}

export const projects: Project[] = [
  {
    url: "https://github.com/hexadecimal233/bili-signature",
    desc: "b站自动改签名~",
    archived: false,
  },
  {
    url: "https://github.com/hexadecimal233/chongchong-free",
    desc: "虫虫钢琴乐谱下载工具",
    archived: false,
  },
  {
    url: "https://github.com/hexadecimal233/zeitgeist-addon",
    desc: "Meteor Client的一个插件",
    archived: true,
  },
  {
    url: "https://github.com/hexadecimal233/Windows-Store-Downloader",
    desc: "Windows Store appx包下载器",
    archived: false,
  },
  {
    url: "https://github.com/LemonClientDevelopment/nsm",
    desc: "Yes Steve Model 老版模型解密工具",
    archived: false,
  },
  {
    url: "https://github.com/hexadecimal233/midi-visualizer",
    desc: "模仿一些音mad里的MIDI可视化工具",
    archived: false,
  },
  {
    url: "https://github.com/hexadecimal233/esp32c3-singing-stepper",
    desc: "电机唱歌~",
    archived: false,
  },
  {
    url: "https://github.com/hexadecimal233/mcsm-reg",
    desc: "MCSM的一个注册WebUI",
    archived: true,
  },
]

export const links: CategoryLink[] = [
  {
    name: "Contact",
    desc: "Reach me!",
    links: [
      {
        name: "Telegram",
        desc: "Hexzii",
        icon: "simple-icons:telegram",
        url: "https://t.me/hexadecimal233",
      },
      {
        name: "QQ",
        desc: "2593828650",
        icon: "simple-icons:qq",
        url: "https://wpa.qq.com/msgrd?v=3&uin=2593828650&site=qq&menu=yes",
      },
      {
        name: "Discord",
        desc: "hexadecimal233",
        icon: "simple-icons:discord",
        url: "https://discord.com/users/711333524711333524",
      },
      {
        name: "Email",
        desc: "contact@onlyra1n.top",
        icon: "mdi:email",
        url: "mailto:contact@onlyra1n.top",
      },
    ],
  },
  {
    name: "Chat",
    desc: "Chat with me!",
    links: [
      {
        name: "QQ Group",
        desc: "904616368",
        icon: "simple-icons:tencentqq",
        url: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=bsVstl7UyIWYLk22GiaApKupGQB5haF0&authKey=%2BPOWzI6ZTA42YuQwoUeiIp4yKAyGEQR5Go6LUu6KbBHMwmcGsDf%2F78bH6aFC4TBy&noverify=0&group_code=904616368",
      },
      {
        name: "Telegram Channel / Chat",
        desc: "Hexzii's Hideout₊˚✧ ﾟ",
        icon: "simple-icons:telegram",
        url: "https://t.me/hexzii_ch",
      },
      {
        name: "Discord Server",
        desc: "Hexzii's Hideout",
        icon: "simple-icons:discord",
        image:
          "https://img.shields.io/discord/1272325246015504414?color=7289DA&label=My%20Server&logo=discord&logoColor=white&style=flat-square",
        url: "https://discord.gg/ABykspBYVz",
      },
    ],
  },
  {
    name: "Videos / Works",
    desc: "Where my vids / works are uploaded",
    links: [
      {
        name: "YouTube",
        desc: "Hexzii⭐",
        icon: "simple-icons:youtube",
        url: "https://www.youtube.com/@hexziied",
      },
      {
        name: "Bilibili",
        desc: "Hexzii",
        icon: "simple-icons:bilibili",
        url: "https://space.bilibili.com/174927495",
      },
      {
        name: "Bilibili (Stream)",
        desc: "盒沐子",
        icon: "simple-icons:bilibili",
        url: "https://space.bilibili.com/174927495",
      },
      {
        name: "SoundCloud",
        desc: "Hexzii",
        icon: "simple-icons:soundcloud",
        url: "https://soundcloud.com/hexzii",
      },
      {
        name: "Twitch",
        desc: "HEXZiiStar",
        icon: "simple-icons:twitch",
        url: "https://www.twitch.tv/hexziistar",
      },
      {
        name: "Pixiv",
        desc: "盒沐子 / Hexzii⭐",
        icon: "simple-icons:pixiv",
        url: "https://www.pixiv.net/users/64711023",
      },
      /*
      {
        name: "Itch.io",
        desc: "Hexzii",
        icon: "simple-icons:itchio",
        url: "https://hexzii.itch.io/",
      },
      */
    ],
  },
  {
    name: "Social",
    desc: "Social media",
    links: [
      {
        name: "Bluesky",
        desc: "盒沐子 / Hexzii⭐",
        icon: "simple-icons:bluesky",
        url: "https://bsky.app/profile/onlyra1n.top",
      },
      {
        name: "X (Main)",
        desc: "Hexzii⭐",
        icon: "simple-icons:x",
        url: "https://twitter.com/llkawi_",
      },
      {
        name: "X (CN Only)",
        desc: "Hexzii⭐",
        icon: "simple-icons:x",
        url: "https://x.com/hexzii16bits/photo",
      },
      {
        name: "Instagram",
        desc: "Hexzii⭐",
        icon: "simple-icons:instagram",
        url: "https://instagram.com/hexzii_",
      },
      {
        name: "Tumblr",
        desc: "HEXZII⭐",
        icon: "simple-icons:tumblr",
        url: "https://www.tumblr.com/hexzii",
      },
      /*
      {
        name: "Mastodon", // or misskey in instances
        desc: "Hexzii⭐",
        icon: "simple-icons:mastodon",
        url: "tba",
      },
      */
    ],
  },
  {
    name: "Code & Design",
    desc: "Where I code and design.",
    links: [
      {
        name: "GitHub",
        desc: "Hexzii",
        icon: "simple-icons:github",
        url: "https://github.com/hexadecimal233",
      },
      {
        name: "GitLab",
        desc: "hexadecimal233",
        icon: "simple-icons:gitlab",
        url: "https://gitlab.com/hexadecimal233",
      },
      {
        name: "Gitee",
        desc: "HexLLKawizii",
        icon: "simple-icons:gitee",
        url: "https://gitee.com/LLKawi",
      },
      {
        name: "HuggingFace",
        desc: "Soda5601",
        icon: "simple-icons:huggingface",
        url: "https://huggingface.co/Soda5601",
      },
      {
        name: "StackOverflow",
        desc: "hexadecimal233",
        icon: "simple-icons:stackoverflow",
        url: "https://stackoverflow.com/users/22309886/hexadecimal233",
      },
      /*
      {
        name: "Codeberg",
        desc: "Hexzii",
        icon: "simple-icons:codeberg",
        url: "https://codeberg.org/hexzii",
      },
      // these are placeholders
      {
        name: "Figma",
        desc: "Hexzii⭐",
        icon: "simple-icons:figma",
        url: "https://www.figma.com/@hexzii",
      },
      {
        name: "DeviantArt",
        desc: "Hexzii⭐",
        icon: "simple-icons:deviantart",
        url: "https://www.deviantart.com/hexzii",
      },
      */
    ],
  },
  {
    name: "Miscellaneous",
    desc: "None of the above",
    links: [
      {
        name: "Steam",
        desc: "Hexzii⭐",
        icon: "simple-icons:steam",
        url: "https://steamcommunity.com/profiles/76561198843801051",
      },
      {
        name: "Epic",
        desc: "HexziiMoe",
        icon: "simple-icons:epicgames",
        url: "https://store.epicgames.com/zh-CN/u/62bae405f7ec4bfc92e00c72b032a942/friends",
      },
      {
        name: "Zhihu",
        desc: "onlyrain233",
        icon: "simple-icons:zhihu",
        url: "https://www.zhihu.com/people/onlyrain233",
      },
      {
        name: "Reddit",
        desc: "Hexzii*",
        icon: "simple-icons:reddit",
        url: "https://www.reddit.com/u/Ame_Chirin",
      },
      {
        name: "Bangumi",
        desc: "盒沐子Hexzii",
        icon: "simple-icons:niconico",
        url: "https://bgm.tv/user/807162",
      },
    ],
  },
]

export const friendLinks: FriendLink[] = [
  // 开往 Travellings 应该被置顶
  {
    name: "Travellings",
    url: "https://www.travellings.cn/go.html",
    desc: "Web Travelling!",
    image: "https://www.travellings.cn/assets/travelling-dark.png",
  },
  {
    name: "wuziqian211's Blog",
    url: "https://wuziqian211.top/",
    desc: "不求最好，只求更好。",
    image: "https://wuziqian211.top/images/face.png",
  },
  {
    name: "水水的小屋🏡~",
    url: "https://www.happycola.top/",
    desc: "水水的小屋🏡~",
    image: "https://www.happycola.top/img/avatar.png",
  },
  {
    name: "StellarLane's Blog",
    url: "https://stellarlane.github.io/",
    desc: "Life's short, why does it take so long?",
    image: "https://ooo.0x0.ooo/2024/07/29/ORlrtq.png",
  },
  {
    name: "桃子的空间w",
    url: "https://www.taoziyooo.top/",
    desc: "这里是桃子🍑！希望你能喜欢我！",
    image:
      "https://www.notion.so/image/attachment%3A01afe8da-20a6-457e-83fd-07b7983dc851%3A1000004871.png?table=collection&id=21c20854-00dd-8121-8719-000b568dc2c6&t=21c20854-00dd-8121-8719-000b568dc2c6",
  },
  {
    name: "天翔TNXGの空间站",
    url: "https://tnxg.top",
    desc: "明日尚未到来，希望凝于心上",
    image: "https://api-space.tnxg.top/avatar?s=qq",
  },
  {
    name: "Snowykami OS",
    url: "https://sfkm.me/",
    desc: "Snowykami的主页",
    image: "https://q.qlogo.cn/g?b=qq&nk=2751454815&s=640",
  },
  // {
  //   name: "Wanna submit yours?",
  //   url: "#",
  //   desc: "Leave Site Name, Site Link (Image / Description is optional) and reach me.",
  // },
]

export const sites: SiteLink[] = [
  {
    name: "My Profile Page",
    url: "https://nichijou.moe",
    icon: "mdi:account",
  },
  {
    name: "My Blog",
    url: "https://me.onlyra1n.top",
    icon: "mdi:book-open",
  },
  {
    name: "Uptime Monitor",
    url: "https://stats.uptimerobot.com/7rGZ5HE96Q",
    icon: "mdi:clock-fast",
  },
]

export const navBarItems: NavBarItem[] = [
  {
    name: "Ech0",
    url: "https://ech0.nichijou.moe",
    icon: "mdi:note-text",
  },
  {
    name: "Alist",
    url: "https://alist.nichijou.moe",
    icon: "mdi:folder-network",
  },
  {
    name: "Gitea",
    url: "https://git.nichijou.moe",
    icon: "mdi:git",
  },
]
