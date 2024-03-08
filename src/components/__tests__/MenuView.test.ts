import { expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import HeadView from "../HeadView.vue";
import type { RouteNodeBean } from "@/bean/RouteNodeBean";


const data: Array<RouteNodeBean> = []
vi.mock('vue-router', () => ({
    useRouter: () => ({
        push: "",
    }),
}));
test("顶部菜单栏", async () => {
    expect(HeadView).toBeTruthy()

    const wrapper = mount(HeadView, { props: { data: [] } })
    await nextTick()

    expect(wrapper.find(".title").text()).toContain("网评管理系统")
    expect(wrapper.find(".subtitle").text()).toContain("Network Evaluation System")
})
