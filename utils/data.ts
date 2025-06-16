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

export const contact: Link[] = [
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
]

export const social: Link[] = [
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
    name: "Pixiv",
    desc: "盒沐子 / Hexzii⭐",
    icon: "simple-icons:pixiv",
    url: "https://www.pixiv.net/users/64711023",
  },
  {
    name: "Zhihu",
    desc: "onlyrain233",
    icon: "simple-icons:zhihu",
    url: "https://www.zhihu.com/people/onlyrain233",
  },
  {
    name: "Bangumi",
    desc: "盒沐子Hexzii",
    icon: "simple-icons:niconico",
    url: "https://bgm.tv/user/807162",
  },
  {
    name: "Bluesky",
    desc: "盒沐子 / Hexzii⭐",
    icon: "simple-icons:bluesky",
    url: "https://bsky.app/profile/onlyra1n.top",
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
    name: "QQ Group",
    desc: "904616368",
    icon: "simple-icons:tencentqq",
    url: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=bsVstl7UyIWYLk22GiaApKupGQB5haF0&authKey=%2BPOWzI6ZTA42YuQwoUeiIp4yKAyGEQR5Go6LUu6KbBHMwmcGsDf%2F78bH6aFC4TBy&noverify=0&group_code=904616368",
  },
  {
    name: "Telegram Channel",
    desc: "Hexzii's Hideout₊˚✧ ﾟ",
    icon: "simple-icons:telegram",
    url: "https://t.me/hexzii_ch",
  },
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
    name: "Codeberg",
    desc: "Hexzii",
    icon: "simple-icons:codeberg",
    url: "https://codeberg.org/hexzii",
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
    name: "Discord Server",
    desc: "Hexzii's Hideout",
    icon: "simple-icons:discord",
    image:
      "https://img.shields.io/discord/1272325246015504414?color=7289DA&label=My%20Server&logo=discord&logoColor=white&style=flat-square",
    url: "https://discord.gg/ABykspBYVz",
  },
]
