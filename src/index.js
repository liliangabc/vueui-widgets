import './styles/ionicons.css'
import './styles/base.less'
import './utils/polyfill'
import { NoticeManager } from './utils/vueFunc'
import { createModal } from './components/modal'
import { createDirectives } from './directives'

// 警告提示
import Alert from './components/Alert'
// 头像
import Avator from './components/Avator'
// 回到顶部
import BackTop from './components/BackTop'
// 微标
import Badge from './components/Badge'
// 按钮
import Button from './components/button/Button'
import ButtonGroup from './components/button/ButtonGroup'
// 卡片
import Card from './components/Card'
// 复选框
import Checkbox from './components/checkbox/Checkbox'
import CheckboxGroup from './components/checkbox/CheckboxGroup'
// 图标
import Icon from './components/Icon'
// 文本输入框
import Input from './components/Input'
// 进度条
import Progress from './components/Progress'
// 标签
import Tag from './components/Tag'
// 时间线
import Timeline from './components/timeline/Timeline'
import TimelineItem from './components/timeline/TimelineItem'
// 折叠面板
import Collapse from './components/collapse/Collapse'
import Panel from './components/collapse/Panel'
// 面包屑导航
import Breadcrumb from './components/breadcrumb/Breadcrumb'
import BreadcrumbItem from './components/breadcrumb/BreadcrumbItem'
// 轮播切换
import Swiper from './components/swiper/Swiper'
import SwiperItem from './components/swiper/SwiperItem'
// 网格布局
import Row from './components/grid/Row'
import Col from './components/grid/Col'
// 布局
import Layout from './components/layout/Layout'
import Header from './components/layout/Header'
import Content from './components/layout/Content'
import Footer from './components/layout/Footer'
import Sider from './components/layout/Sider'
// 单选按钮
import Radio from './components/radio/Radio'
import RadioGroup from './components/radio/RadioGroup'
// 开关
import ISwitch from './components/ISwitch'
// 标签页
import Tabs from './components/tabs/Tabs'
import TabPane from './components/tabs/TabPane'
// 穿梭框
import Transfer from './components/Transfer'
// 评分
import Rate from './components/Rate'
// 数值输入框
import InputNumber from './components/InputNumber'
// 下拉选择框
import Select from './components/select/Select'
import Option from './components/select/Option'
import OptionGroup from './components/select/OptionGroup'
// 步骤条
import Step from './components/step/Step'
import Steps from './components/step/Steps'
// 进度环
import ICircle from './components/ICircle'
// 无限滚动
import Scroll from './components/scroll/Scroll'
// 图钉
import Affix from './components/Affix'
// 分页器
import Page from './components/Page'
// 下拉菜单
import Dropdown from './components/dropdown/Dropdown'
import DropdownMenu from './components/dropdown/DropdownMenu'
import DropdownItem from './components/dropdown/DropdownItem'
// 菜单
import Menu from './components/menu/Menu'
import MenuItem from './components/menu/MenuItem'
import Submenu from './components/menu/Submenu'
import MenuGroup from './components/menu/MenuGroup'
// 文字提示
import Tooltip from './components/Tooltip'
// 气泡提示
import Poptip from './components/Poptip'
// 树形控件
import Tree from './components/tree/Tree'
// 表格
import Table from './components/table/Table'
// 滑块
import Slider from './components/Slider'
// 表单
import Form from './components/form/Form'
// 表单项
import FormItem from './components/form/FormItem'
// 自动补全
import AutoComplete from './components/AutoComplete'

// 消息提示
import Message from './components/Message'
// 通知提醒
import Notice from './components/Notice'
// 模态框
import Modal from './components/modal/Modal'
// 加载中
import Spin, { createSpin } from './components/spin'
// 加载条
import { createLoadingBar } from './components/loading-bar'

const comps = {
  Alert,
  Avator,
  BackTop,
  Badge,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  CheckboxGroup,
  Icon,
  Input,
  Progress,
  Tag,
  Timeline,
  TimelineItem,
  Collapse,
  Panel,
  Modal,
  Breadcrumb,
  BreadcrumbItem,
  Swiper,
  SwiperItem,
  Row,
  Col,
  Layout,
  Header,
  Content,
  Footer,
  Sider,
  Radio,
  RadioGroup,
  ISwitch,
  Tabs,
  TabPane,
  Spin,
  Transfer,
  Rate,
  InputNumber,
  Select,
  Option,
  OptionGroup,
  Step,
  Steps,
  ICircle,
  Scroll,
  Affix,
  Page,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  MenuItem,
  Submenu,
  MenuGroup,
  Tooltip,
  Poptip,
  Tree,
  Table,
  Slider,
  Form,
  FormItem,
  AutoComplete
}

export default {
  /**
   * 安装插件
   * @param {import('vue').VueConstructor} Vue 
   * @param {Object} options 
   */
  install(Vue, options = {}) {
    let prefix = typeof options.prefix === 'string' ? options.prefix : 'Ui'
    for (let name in comps) Vue.component(prefix + name, comps[name])

    // 消息提醒对象
    Vue.prototype.$Message = new NoticeManager(Vue, Message, 'ui-message-wrapper')
    // 通知提醒对象
    Vue.prototype.$Notice = new NoticeManager(Vue, Notice, 'ui-notice-wrapper', { duration: 4.5 })
    // 标准对话框
    Vue.prototype.$Modal = createModal(Vue)
    // 加载中对象
    Vue.prototype.$Spin = createSpin(Vue)
    // 加载条对象
    Vue.LoadingBar = Vue.prototype.$Loading = createLoadingBar(Vue)
    // 全局指令
    createDirectives(Vue)
  }
}