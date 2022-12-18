<template>
  <div>
    CREATE TABLE `user_score` ( `user_uuid` char(32) COLLATE utf8mb4_general_ci
    NOT NULL DEFAULT '' COMMENT '用户id', `level` tinyint(3) NOT NULL DEFAULT
    '1' COMMENT '等级', `total_score` int(11) NOT NULL DEFAULT '0' COMMENT
    '总积分', `usable_score` int(11) NOT NULL DEFAULT '0' COMMENT '可用积分',
    `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE
    CURRENT_TIMESTAMP COMMENT '修改时间', `deleted` tinyint(1) NOT NULL DEFAULT
    '0' COMMENT '是否删除', PRIMARY KEY (`user_uuid`) ) ENGINE=InnoDB DEFAULT
    CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC
    COMMENT='用户积分账户表';
    <button
      class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
    >
      Click me
    </button>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    return {};
  }
};
</script>

<style scoped></style>
