<template>
    <div class="loginView">
        <div class="loginBox">
            <div class="leftBox">
                <div class="HUD">
                    <el-image ref="rotateImg" :src="HUD" fit="scale-down"></el-image>
                </div>
                <el-image class="point" :src="point" fit="scale-down"></el-image>
            </div>
            <div class="rightBox">
                <div class="rightBox2">
                    <div class="title">满天星网评系统</div>
                    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="0px" class="demo-ruleForm"
                        style="width: 100%;" status-icon>
                        <el-form-item prop="phone">
                            <el-input placeholder="请输入手机号码" v-model="ruleForm.phone"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input placeholder="请输入登录密码" v-model="ruleForm.password"></el-input>
                        </el-form-item>
                        <el-form-item prop="code">
                            <el-col :span="16">
                                <el-input placeholder="验证码" v-model="ruleForm.code"></el-input>
                            </el-col>
                            <el-col :span="8">
                                <el-image :src="captchaCode" @click="viewModel.captcha();">
                                    <template #error>
                                        <div class="image-slot">
                                            <el-icon><i-ep-warning /></el-icon>
                                        </div>
                                    </template>
                                </el-image>
                            </el-col>
                        </el-form-item>
                        <el-form-item required>
                            <el-button type="primary" style="width: 100%;" round
                                @click="submitForm(ruleFormRef)">登录</el-button>
                        </el-form-item>
                    </el-form>

                    <div class="dowload_tips">
                        <span>温馨提示：建议</span>
                        <a class="download" href="https://218.2.192.195:18088/software/chrome_installer_64.exe">下载</a>
                        <span>使用谷歌浏览器</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HUD from "@/assets/images/login/HUD.png"
import point from "@/assets/images/login/point.png"
import { ref, onMounted, onUnmounted, reactive } from "vue";
import type { FormInstance, FormRules } from 'element-plus'
import { LoginViewModel } from "@/viewModel/LoginViewModel";
import type { CaptchaBean } from "@/bean/login/CaptchaBean";

let router = useRouter()

interface RuleForm {
    phone: string,
    password: string,
    code: string
}
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
    phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    code: [{ required: true, message: '请输入图形验证码', trigger: 'blur' }]
})

const ruleForm = reactive<RuleForm>({
    phone: '18210992622',
    password: 'Cetc28.com',
    code: '1'
})
function submitForm(formEl: FormInstance | undefined) {
    if (!formEl) return
    formEl.validate((valid, fields) => {
        if (valid) {
            viewModel.login(ruleForm.phone, ruleForm.password, captchaId.value, ruleForm.code)
        } else {
            console.log('error submit!', fields)
        }
    })
}
function resetForm(formEl: FormInstance | undefined) {
    if (!formEl) return
    formEl.resetFields()
}

const captchaId = ref<string>("")
const captchaCode = ref<string>("")
const viewModel = new LoginViewModel({ onCaptchaSuccess, onLoginSuccess });
viewModel.captcha();
function onCaptchaSuccess(captcha: CaptchaBean) {
    captchaId.value = captcha.captchaId
    captchaCode.value = captcha.captchaCode
}
function onLoginSuccess() {
    router.push("/root")
}

// -----------------------------------------------
const rotateImg = ref(null)
let rotINT: number = -1;
let n: number = -1;
let x: HTMLElement | null;
onMounted(() => {
    x = rotateImg.value.$el
    console.log(x);

    rotINT = setInterval(() => {
        startRotate();
    }, 10);
})
onUnmounted(() => {
    clearInterval(rotINT)
})
function startRotate() {
    n = n + 0.5;
    if (!x) return
    x.style.transform = 'rotate(' + n + 'deg)';
    x.style.width = 100 + n + 'px';
    x.style.height = 100 + n + 'px';

    if (100 + n > 225) {
        x.style.width = 225 + 'px';
        x.style.height = 225 + 'px';
    }
    if (n === 180 || n === 360) {
        if (n >= 360) {
            n = 360;
        }
    }
}
</script>

<style lang="less" scoped>
:deep(.el-input__wrapper) {
    border-radius: 17px;
}

.title {
    margin-bottom: calc(80px - 40px + 16px);
}

.el-input,
.el-image {
    margin-top: calc(40px - 16px);
}

.el-button {
    margin-top: calc(40px - 16px);
}

.loginView {
    width: 100%;
    height: 100%;
    background-image: url("@/assets/images/login/bg.png");
    background-size: 100% 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .loginBox {
        background: url('@/assets/images/login/box_bg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;

        display: flex;

        .leftBox {
            flex-grow: 1000;
            width: 0;

            position: relative;

            .HUD,
            .point {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .rightBox {
            flex-grow: 542;
            width: 0;
            flex-shrink: 0;



            .rightBox2 {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                padding: 0px 70px;
            }

            .title {
                font-size: 36px;
                color: #323232;
                font-family: Microsoft YaHei;
                font-weight: 600;
            }

            .dowload_tips {
                display: flex;
                margin-top: 8%;
                cursor: pointer;

                .download {
                    text-decoration: underline;
                }

                .download:hover {
                    color: #096ff9 !important;
                }
            }
        }
    }
}

@media screen and (max-width: 1600px) {
    .loginBox {
        width: 68.32rem;
        height: 40rem;

        .HUD {
            width: 20rem;
            height: 20rem;
            top: 18%;
            left: 5%;
        }

        .point {
            width: 303px;
            height: 404px;
            top: 236px;
            left: 105px;
        }
    }
}

@media screen and (min-width: 1601px) {
    .loginBox {
        width: 81.13rem;
        height: 47.5rem;

        .HUD {
            width: 25rem;
            height: 25rem;
            top: 19%;
            left: 5%;
        }

        .point {
            width: 303px;
            height: 490px;
            top: 273px;
            left: 152px;

        }
    }
}
</style>@/bean/login/CaptchaBean