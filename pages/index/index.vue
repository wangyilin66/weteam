<template>
  <view class="container">
    <u-navbar
      :is-back="false"
      :is-fixed="true"
      title=""
      title-color="#fff"
      :background="background"
			height="50"
    >
      <view class="slot-wrap"><Header @search="handleClickSearch()"></Header></view>
    </u-navbar>
    <view class="box">
      <NavTab :nav-list="navList" @handleClickCheck="handleClickCheck"></NavTab>
      <NavList :navLists="menuList"></NavList>
    </view>
    <!-- 通知公告 -->
    <view class="notice">
      <Title :title="'通知公告'" :is-msg="true"></Title>
      <view class="msg_content">
        <view class="nav_list d-flex">
          <view
            class="nav_item"
            v-for="item in noticeType"
            :key="item._id"
            @click="handleClickTab(item._id)"
          >
            <view
              class="nav_item_content"
              :class="{ active: item._id === acIndex }"
            >
              {{ item.tips }}
            </view>
          </view>
        </view>
        <view class="news_list">
          <view
            class="news_item d-flex ai-center"
            v-for="(news, key) in newsList"
            :key="key"
          >
            <view class="news_status" :class="{ is_read: news.status === 1 }">
              {{ news.status === 0 ? "未读" : "已读" }}
            </view>
            <view class="news_title lh-1">
              {{ news.msg }}
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 每日任务 -->
    <view class="daily_tasks">
      <Title :title="'每日任务'" :is-more="true"></Title>
      <view class="task_list">
        <view class="task_item d-flex jc-between ai-center" v-for="item in 2">
          <view class="task_box d-flex flex-column jc-around">
            <view class="task_title lh-1">
              完成一次高质量VR带看
            </view>
            <view class="task_detail">
              <text class="goods">5优品分</text>丨任务详情
            </view>
          </view>
          <view class="task_btn">
            去完成
          </view>
        </view>
      </view>
    </view>
    <!-- 推荐好房 -->
    <view class="recommend_house">
      <view class="title_box">
        <Title :title="'推荐好房'"></Title>
      </view>
      <view class="" v-for="item in 8"><HouseItem></HouseItem></view>
    </view>
  </view>
</template>

<script>
import Header from "./components/Header";
import NavTab from "./components/NavTab";
import NavList from "./components/NavList";
import Title from "./components/Title";
import HouseItem from "../../components/house/HouseItem.vue";
export default {
  components: {
    Header,
    NavTab,
    NavList,
    Title,
    HouseItem,
  },
  data() {
    return {
      text: "123",
      acIndex: 1,
      background: {
        backgroundImage:
          "linear-gradient(-75deg, rgba(18, 183, 162, 1) 0%, rgba(50, 197, 153, 1) 100%)",
      },
      navList: [
        {
          title: "二手房源",
          icon: "../../static/images/navIcon/second-hand-house.png",
        },
        {
          title: "新房楼盘",
          icon: "../../static/images/navIcon/house-ranking.png",
        },
        {
          title: "好房评选",
          icon: "../../static/images/navIcon/new-floor.png",
        },
        {
          title: "线索",
          icon: "../../static/images/navIcon/clue.png",
        },
      ],
      menuList: [
        {
          title: "签约管理",
          _id: 1,
          imgUrl: "../../static/images/navIcon/artcle.png",
        },
        {
          title: "交易代办",
          _id: 2,
          imgUrl: "../../static/images/navIcon/artcle.png",
        },
        {
          title: "贷款计算",
          _id: 3,
          imgUrl: "../../static/images/navIcon/artcle.png",
        },
        {
          title: "优品规则",
          _id: 4,
          imgUrl: "../../static/images/navIcon/artcle.png",
        },
        {
          title: "获客海报",
          _id: 5,
          imgUrl: "../../static/images/navIcon/artcle.png",
        },
        {
          title: "获客文章",
          _id: 6,
          imgUrl: "../../static/images/navIcon/artcle.png",
        },
        {
          title: "私域访客",
          _id: 7,
          imgUrl: "../../static/images/navIcon/artcle.png",
        },
        {
          title: "报备管理",
          _id: 8,
          imgUrl: "../../static/images/navIcon/artcle.png",
        },
        {
          title: "展位开关",
          _id: 9,
          imgUrl: "../../static/images/navIcon/artcle.png",
        },
        {
          title: "全部应用",
          _id: 10,
          imgUrl: "../../static/images/navIcon/artcle.png",
        },
      ],
      noticeType: [
        {
          _id: 1,
          tips: "重要通知",
        },
        {
          _id: 2,
          tips: "产品更新",
        },
        {
          _id: 3,
          tips: "宣传活动",
        },
        {
          _id: 4,
          tips: "新闻播报",
        },
        {
          _id: 5,
          tips: "品质规范",
        },
      ],
      newsList: [
        {
          status: 1,
          msg: "租赁必看好房知识卡片（第一期）",
        },
        {
          status: 0,
          msg: "3天VR带看6人，转委托4人！他是咋做到的？",
        },
        {
          status: 0,
          msg: "做渗透 VR带看更方便 专属激励等着你",
        },
        {
          status: 0,
          msg: "租赁必看好房知识卡片（第一期）",
        },
      ],
    };
  },
  methods: {
    handleClickCheck(e) {
      console.log(e);
    },
    handleClickTest() {
      console.log("13");
    },
    handleClickTab(index) {
      this.acIndex = index;
    },
		handleClickSearch(){
      console.log('搜索')
      uni.navigateTo({
        url:`/pages/index/Search/Search`
      })
		}
  },
  onLoad() {},
};
</script>

<style lang="scss" scoped>
.container {
  .slot-wrap {
    display: flex;
    align-items: center;
    /* 如果您想让slot内容占满整个导航栏的宽度 */
    flex: 1;
    /* 如果您想让slot内容与导航栏左右有空隙 */
    padding: 0 40rpx;
  }
  .box {
    width: 100%;
    height: 480rpx;
    background: linear-gradient(
      -75deg,
      rgba(18, 183, 162, 1) 0%,
      rgba(50, 197, 153, 1) 100%
    );
    position: relative;
  }
  // 通知公告
  .notice {
    width: 100%;
    box-sizing: border-box;
    padding: 0rpx 40rpx;
    .msg_content {
      box-sizing: border-box;
      padding: 30rpx 0rpx;
      .nav_list {
        width: 100%;
        overflow: auto;
        .nav_item {
          box-sizing: border-box;
          display: inline-block;
          min-width: 138rpx;
          height: 69rpx;
          margin-right: 20rpx;
          font-size: 24rpx;
          &:last-child {
            margin-right: 0;
          }
          .nav_item_content {
            width: 100%;
            height: 56rpx;
            border-radius: 8rpx;
            border: 1px solid rgba(215, 215, 215, 1);
            text-align: center;
            line-height: 58rpx;
            font-weight: bold;
            font-size: 24rpx;
            letter-spacing: 2rpx;
            &.active {
              background: #47cd97;
              position: relative;
              border: 0;
              color: #fff;
              &:after {
                position: absolute;
                content: "";
                left: 50%;
                transform: translateX(-50%);
                bottom: -20rpx;
                width: 0;
                height: 0;
                border: 10rpx solid transparent;
                border-top-color: #47cd97;
              }
            }
          }
        }
      }
      .news_list {
        width: 100%;
        font-size: 28rpx;
        .news_item {
          width: 100%;
          margin-top: 20rpx;
          overflow: hidden;
          .news_status {
            border: 1rpx solid #f83c0a;
            font-size: 22rpx;
            padding: 3rpx 8rpx;
            box-sizing: border-box;
            border-radius: 6rpx;
            margin-right: 10rpx;
            color: #f83c0a;
          }
          .is_read {
            color: #999;
            border-color: #999;
          }
        }
      }
    }
  }
  // 每日任务
  .daily_tasks {
    width: 100%;
    box-sizing: border-box;
    padding: 40rpx;
    font-size: 28rpx;
    .task_list {
      width: 100%;
      .task_item {
        width: 100%;
        margin-top: 40rpx;
        .task_box {
          width: 478rpx;
          height: 70rpx;
          .task_title {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 32rpx;
            font-weight: bold;
            color: #444;
          }
          .task_detail {
            font-size: 24rpx;
            .goods {
              color: #42cd94;
            }
          }
        }
        .task_btn {
          width: 160rpx;
          height: 70rpx;
          font-size: 28rpx;
          color: #fff;
          background: #47cd97;
          border-radius: 8rpx;
          letter-spacing: 2rpx;
          text-align: center;
          line-height: 72rpx;
        }
      }
    }
  }

  // 推荐好房
  .recommend_house {
    width: 100%;
    .title_box {
      width: 100%;
      box-sizing: border-box;
      padding: 0 40rpx;
    }
  }
}
</style>
