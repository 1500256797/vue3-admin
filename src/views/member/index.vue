<script setup lang="ts">
import { tableDataMore } from "./data";
import { PureTable } from "@pureadmin/table";

const props = withDefaults(
  defineProps<{
    height?: string;
  }>(),
  {
    height: null
  }
);
const columns: TableColumnList = [
  {
    label: "用户id",
    prop: "user_uuid",
    width: "100",
    fixed: true
  },
  {
    label: "等级",
    prop: "level",
    width: "60"
  },
  {
    label: "总积分",
    prop: "total_score",
    width: "100"
  },
  {
    label: "可用积分",
    prop: "usable_score",
    width: "260"
  },
  {
    label: "创建时间",
    prop: "create_at",
    width: "260"
  },
  {
    label: "修改时间",
    prop: "update_at",
    width: "260"
  },
  {
    label: "操作",
    width: "120",
    fixed: "right",
    slot: "operation"
  }
];
function handleClick(row) {
  console.log(
    "%crow===>>>: ",
    "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
    row
  );
}
</script>

<template>
  <pure-table
    :data="
      props.height
        ? tableDataMore.concat(tableDataMore).concat(tableDataMore)
        : tableDataMore
    "
    :columns="columns"
    :height="props.height"
  >
    <template #operation="{ row }">
      <el-button link type="primary" size="small" @click="handleClick(row)">
        Detail
      </el-button>
      <el-button link type="primary" size="small">Edit</el-button>
    </template>
  </pure-table>
</template>
