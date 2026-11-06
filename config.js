/**
 * 个人名片 · 唯一推荐修改的文件（像填表一样改下面对象即可）
 * 说明见仓库根目录 README.md
 */
const CONFIG = {
  meta: {
    title: 'Kiki · 个人名片',
    description:
      'Kiki — 复旦大学腾飞书院·计算与智能创新学院 工科在读本科生：简介、技能与兴趣、科研、竞赛、实习与社会实践。',
    lang: 'zh-CN'
  },

  /** 顶栏与页脚文案 */
  site: {
    headerName: 'Kiki',
    footerName: 'Kiki',
    footerOrg: 'FDu',
    footerNote: '本页为 github.io 静态部署教程示例 · 左右滑动或方向键切换'
  },

  /**
   * 底部圆点导航顺序与每一「张」幻灯片
   * 不需要某一整页时，把对应项的 enabled 改为 false（不必删 HTML）
   */
  slides: [
    { id: 'home', enabled: true, navLabel: '主页', navAriaLabel: '首页' },
    { id: 'skills', enabled: true, navLabel: '技能', navAriaLabel: '技能与兴趣' },
    { id: 'research', enabled: true, navLabel: '科研经历', navAriaLabel: '科研经历' },
    { id: 'competition', enabled: true, navLabel: '竞赛获奖', navAriaLabel: '竞赛获奖' },
    { id: 'internship', enabled: true, navLabel: '实习经验', navAriaLabel: '实习经验' },
    { id: 'social', enabled: true, navLabel: '社会实践', navAriaLabel: '社会实践' }
  ],

  /** 装饰图：右下角水印；技能等卡片标题旁小图标 */
  assets: {
    watermark: 'assets/FDU.png',
    sectionIcon: 'assets/标题.svg'
  },

  profile: {
    greetingLead: '你好，我是',
    /** 首页大标题里渐变显示的名字 */
    displayName: 'Kiki',
    locationLine: '复旦大学腾飞书院',
    intro: '工科学生一枚；本页是 GitHub Pages 静态个人名片的示例，展示简介。',
    quote: '「永远在腾飞路上！」',
    /** 头像：可把图片放到 assets/ 下，例如 assets/avatar.jpg */
    avatar: 'assets/秘书处_线条.png',
    avatarAlt: 'Kiki',
    aboutTitle: 'About Me',
    /** 右侧「关于我」列表；有 href 时渲染为链接 */
    aboutRows: [
      { label: '年龄', value: '18 岁' },
      { label: '爱好', value: '打球、音乐、看电视剧' },
      {
        label: 'GitHub',
        value: 'KikiCai-Justin-git',
        href: 'https://github.com/kikicai-justin-git'
      },
      {
        label: '邮箱',
        value: '1051572866@qq.com',
        href: 'mailto:1051572866@qq.com'
      }
    ]
  },

  links: {
    /** 右上角「GitHub 仓库」按钮 */
    repoUrl: 'https://github.com/KikiCai-Justin/kikicai-justin-git.github.io',
    repoLabel: 'GitHub 仓库',
    /** 主按钮文案与跳转的幻灯片 id（须为上面 slides 中某一 id） */
    primaryCtaLabel: '看看我的经历',
    primaryCtaSlideId: 'research'
  },

  skills: {
    title: '技能',
    columns: [
      {
        sections: [
          {
            heading: 'Language',
            items: ['中文', 'English']
          },
          {
            heading: 'Interests',
            items: ['Music', 'Basketball', 'Snooker']
          }
        ]
      },
      {
        sections: [
          {
            heading: 'Tech',
            items: [
              'Python',
              'C',
              'Git'
            ]
          }
        ]
      },
      {
        sections: [
          {
            heading: '看剧',
            items: ['《折月亮》', '《点燃我温暖你》', '《炽夏》']
          }
        ]
      }
    ]
  },

  /** 各经历页：标题 + 字符串列表（留空数组则整段列表不渲染） */
  timelines: {
    research: {
      title: '科研经历',
      items: [
        '很遗憾，没有'
      ]
    },
    competition: {
      title: '竞赛获奖经历',
      items: [
        '很遗憾，没有',
      ]
    },
    internship: {
      title: '实习经验',
      items: [
        '学车'
      ]
    },
    social: {
      title: '社会实践',
      items: [ '旅游','看“万兽之王演唱会”']
    }
  }
}
