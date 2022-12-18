// 最简代码，也就是这些字段必须有
export default {
  path: "/member",
  meta: {
    title: "会员管理",
    icon: "ant-design:team-outlined"
  },
  children: [
    {
      path: "/member/index",
      name: "Member",
      component: () => import("@/views/member/index.vue"),
      meta: {
        title: "会员列表",
        // 通过设置showParent为true，显示父级
        showParent: true
      }
    },
    {
      path: "/member/score",
      name: "UserScore",
      component: () => import("@/views/member/user_score.vue"),
      meta: {
        title: "积分管理",
        // 通过设置showParent为true，显示父级
        showParent: true
      }
    }
  ]
};
