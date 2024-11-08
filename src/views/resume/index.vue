<template>
  <div class="resume-container">
    <div class="base_tools">
      <div class="toolbar"></div>
    </div>
    <div class="paper" id="paper" contenteditable="true">
      <div id="paper-body">
        <div class="apply-job-container">
          <div id="job" contenteditable="true">前端开发工程师</div>
          <select id="status">
            <option>随时到岗</option>
            <option>已离职</option>
            <option>还在职</option>
          </select>
        </div>
        <div class="jianli-title">
          <a contenteditable="true">个人资料</a>
        </div>
        <div class="user-base-container" contenteditable="true">
          <div class="photo-container">
            <img id="photo" crossorigin="anonymous"
                 src="https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_531a63fe756c49518e4e17855d5269c6.jpg">
            <div class="edit-photo-model" id="edit-photo-model" style="display: none;">
              <i class="layui-icon" style="color: white; font-size: 25px"></i><br>
              <span style="font-size: 14px; color: white">修改头像</span>
            </div>
          </div>
          <input class="layui-upload-file" type="file" accept="*" name="file" multiple="">
          <div id="name" contenteditable="true">余泽伟</div>
          <div id="address" contenteditable="true">28岁 男 广州 天河</div>
          <div id="desc" contenteditable="true" style="width: 550px">5年前端研发经验，主要技术栈为Vue，能够从0到1独立开发PC端，移动端，可视化大屏</div>
          <div id="desc" contenteditable="true" style="width: 550px"><br></div>
          <div id="desc" contenteditable="true" style="width: 550px"><br></div>
          <div id="desc" contenteditable="true" style="width: 550px"><br></div>
          <div class="contact-container">
            <div class="contact-item">
<!--              <img src="/img/icon/jianli/phone.png">-->
              <div id="phone" contenteditable="true"><span style="letter-spacing: 0.16065px;">17820578612</span><span
                  style="color: rgb(0, 0, 0); border-radius: 2px;"></span></div>
            </div>
            <div class="contact-item">
<!--              <img src="/img/icon/jianli/email.png">-->
              <div id="email" contenteditable="true">yuikct@163.com</div>
            </div>
          </div>
          <div class="education" id="educationCard1">
            <div id="school" contenteditable="true" style="padding-left: 0px">广东岭南职业技术学院<span
                style="background-color: rgb(38, 38, 38);"></span></div>
            <div class="education-info">
              <div id="education" contenteditable="true" style="padding-left: 0px">大专</div>
              <div id="speciality" contenteditable="true">软件开发专业</div>
              <div id="graduation-time" contenteditable="true" style="border-right: none">2019年毕业</div>
            </div>
            <i id="ctrlEducationCard1" class="layui-icon ctrl-education" style="display: none;"></i>
          </div>
          <div class="education" id="educationCard2" style="display: none;">
            <div id="school2" contenteditable="true" style="padding-left: 0px;">学校名称</div>
            <div class="education-info">
              <div id="education2" contenteditable="true" style="padding-left: 0px;">学历</div>
              <div id="speciality2" contenteditable="true">专业</div>
              <div id="graduation-time2" contenteditable="true">毕业时间</div>
            </div>
            <i id="ctrlEducationCard2" class="layui-icon ctrl-education" style="display: none;"></i>
          </div>
        </div>
        <div class="jl-item">
          <div class="jianli-title">
            <a contenteditable="true">专业技能</a>
          </div>
          <div id="tech" contenteditable="true">1. 熟练掌握HTML/HTML5、Css/Css3、JavaScript/ES6等Web标准技术，解决各类页面布局，还原设计稿；</div>
          <div id="tech" contenteditable="true">2. 熟悉Vue、React等前端框架，如底层原理、生命周期，掌握setup函数，掌握插槽slot实现，封装公用组件；
            3. 熟练使用Element-UI、ViewUI、Ant-Design、Vant、Electron等技术栈，具备独立开发项目能力；
          </div>
          <div id="tech" contenteditable="true">4. 熟悉使用ECharts、AntV/G6、DataV、Swiper等数据可视化库，具有真实企业项目开发经验；</div>
          <div id="tech" contenteditable="true">5. 熟悉微信小程序、微信公众号开发流程，比如实现组件封装、直播商城、微信支付，聊天室等；</div>
          <div id="tech" contenteditable="true">6. 熟悉Uni-App、Taro、Electron等前端应用框架，具备独立开发移动端APP能力；</div>
          <div id="tech" contenteditable="true">7. 熟悉HTTP、Websocket通信协议，掌握Node.js、Npm、解决多浏览器兼容性有一定经验；</div>
          <div id="tech" contenteditable="true">8. 掌握前端常用工程化组件、编译和构建工具，如Webpack/Vite，Babel、Eslint，能够配置和优化前端项目；
            9. 熟悉版本控制工具Git的协作开发、分支管理、版本管理，能进行良好的团队协作以及有良好的编码习惯；
          </div>
          <i class="sort-item layui-icon"></i>
        </div>
        <div class="jl-item">
          <div class="jianli-title" id="lvli">
            <a contenteditable="true">工作履历</a>
            <button id="addLvLi" style="display: none;"><i class="layui-icon"></i> 添加履历</button>
          </div>
          <div class="company-times">
            <ul class="layui-timeline" style="text-align: left; margin-bottom: -10px" id="companys">

              <li class="companyItem layui-timeline-item" style="padding-bottom: 7px">
                <i class="layui-icon layui-timeline-axis"></i>
                <div class="layui-timeline-content layui-text">
                  <h3 class="layui-timeline-title" contenteditable="true">2023.12 ~ 2024.10</h3>
                  <p class="companyJobDesc" contenteditable="true">广州呵哦猴二手商品贸易有限公司 - 前端开发工程师
                    负责睐回官网、睐回二手奢饰品APP产品的研发工作</p>
                  <img class="company-logo" crossorigin="anonymous"
                       src="https://coderutil.oss-cn-beijing.aliyuncs.com/jianli/company/file_4a18e43579444da8afd100f43df3da7b.png"><input
                    class="layui-upload-file" type="file" accept="*" name="file" multiple="">
                </div>
                <i class="delete-item layui-icon" onmouseover="layer.msg('删除该工作经历');" onmouseout="layer.closeAll()"
                   style="display: none;"></i>
              </li>
              <li class="companyItem layui-timeline-item" style="padding-bottom: 7px">
                <i class="layui-icon layui-timeline-axis"></i>
                <div class="layui-timeline-content layui-text">
                  <h3 class="layui-timeline-title" contenteditable="true">2021.03 ~ 2023.9</h3>
                  <p class="companyJobDesc" contenteditable="true">广州新赫信息科技有限公司 - 前端开发工程师
                    负责数据可信生态、微信小程序、监控大屏等多款产品的研发工作，任职期间连续两年获得公司年度奉献奖</p>
                  <img class="company-logo" crossorigin="anonymous"
                       src="https://coderutil.oss-cn-beijing.aliyuncs.com/jianli/company/file_ba5db463f0b64fdfb370f5838760337c.png"><input
                    class="layui-upload-file" type="file" accept="*" name="file" multiple="">
                </div>
                <i class="delete-item layui-icon" onmouseover="layer.msg('删除当前工作经历');" onmouseout="layer.closeAll()"
                   style="display: none;"></i>
              </li>
              <li class="companyItem layui-timeline-item" style="padding-bottom: 7px">
                <i class="layui-icon layui-timeline-axis"></i>
                <div class="layui-timeline-content layui-text">
                  <h3 class="layui-timeline-title" contenteditable="true">2019.6 ~ 2021.01</h3>
                  <p class="companyJobDesc" contenteditable="true">广东中科云健康科技有限公司 前端开发工程师
                    负责云慧康家庭端、医生端、医助端等产品的研发工作</p>
                  <img class="company-logo" crossorigin="anonymous"
                       src="https://coderutil.oss-cn-beijing.aliyuncs.com/jianli/company/file_10764387319e43728531a465e9e585fa.png"><input
                    class="layui-upload-file" type="file" accept="*" name="file" multiple="">
                </div>
                <i class="delete-item layui-icon" onmouseover="layer.msg('删除当前工作经历');" onmouseout="layer.closeAll()"
                   style="display: none;"></i>
              </li>
            </ul>
          </div>
          <i class="sort-item layui-icon"></i>
        </div>
        <div class="jl-item">
          <div class="jianli-title" id="jingyan">
            <a contenteditable="true">项目经验</a>
            <button id="addJingYan" style="display: none;"><i class="layui-icon"></i> 添加经验</button>
          </div>
          <div id="jingyans" class="">
            <div class="jl-jy-item">
              <div class="jingyan-item" contenteditable="true">
                <div class="jingyan-header">
                  <div class="jingyan-name" contenteditable="true">睐回二奢平台APP+睐回官网</div>
                  <div class="jingyan-role" contenteditable="true">前端开发工程师</div>
                  <div class="jingyan-time" contenteditable="true">2013.12 ~ 2024.10</div>
                </div>
                <div class="jingyan-title" contenteditable="true">
                  技术栈
                </div>
                <div class="jingyan-content projectTech" contenteditable="true">uniapp+vue3 + ts&nbsp; + SpringCloud +
                  JPA + MySQL + Redis
                </div>
                <div class="jingyan-title" contenteditable="true">
                  项目简介
                </div>
                <div class="jingyan-content projectDesc" contenteditable="true">睐回平台致力解决商家和用户们的二手奢饰品<span
                    style="background-color: transparent; -webkit-text-fill-color: unset;">闲置问题，提供全面的解决方案包括知名度提升、优化进货与清货渠道，以及最新的行业洞察和专业工具。打造一个以“高品质真品”为核心的二手奢饰品交易平台</span>
                </div>
                <div class="jingyan-title" contenteditable="true">
                  我的职责
                </div>
                <div class="jingyan-content projectWorkContent" contenteditable="true">
                  担任项目中的前端主要负责人，负责产品战略规划、竞品分析，Axure原型设计，需求文档撰写，项目进程管理、沟通UI、前端、开发、测试及运营，参与产品上线前终测及产品上线后运营与负责新功能迭代。
                </div>
                <div class="jingyan-title" contenteditable="true">
                  难点与成长
                </div>
                <div class="jingyan-content projectIncome" contenteditable="true">
                  担任项目中产品经理，负责产品战略规划、竞品分析，Axure原型设计，需求文档撰写，项目进程管理、沟通UI、前端、开发、测试及运营，参与产品上线前终测及产品上线后运营与负责新功能迭代。
                </div>
                <i class="delete-jingyan-item layui-icon" onmouseover="layer.msg('删除该项目');"
                   onmouseout="layer.closeAll()" style="display: none;"></i>
              </div>
              <i class="sort-item-jy layui-icon"></i>
            </div>
            <div class="jl-jy-item">
              <div class="jingyan-item" contenteditable="true">
                <div class="jingyan-header">
                  <div class="jingyan-name" contenteditable="true">项目名</div>
                  <div class="jingyan-role" contenteditable="true">研发负责人</div>
                  <div class="jingyan-time" contenteditable="true">时间</div>
                </div>
                <div class="jingyan-title" contenteditable="true">
                  技术栈
                </div>
                <div class="jingyan-content projectTech" contenteditable="true">
                  JDK17 + SpringBoot3.0 + SpringCloud + JPA + MySQL + Redis
                </div>
                <div class="jingyan-title" contenteditable="true">
                  项目简介
                </div>
                <div class="jingyan-content projectDesc" contenteditable="true">
                  以兰花为媒介，制定行业整合平台，去除传统绿植赚取差价的思维模式，将农业市场带向资本市场。将线下的批发行业转战至线上，为线下传统行业提供沟通和链接的平台。解决传统行业人脉滞留单一的痛点，并改变相似行业的竞价关系为合作关系。
                </div>
                <div class="jingyan-title" contenteditable="true">
                  我的职责
                </div>
                <div class="jingyan-content projectWorkContent" contenteditable="true">
                  担任项目中产品经理，负责产品战略规划、竞品分析，Axure原型设计，需求文档撰写，项目进程管理、沟通UI、前端、开发、测试及运营，参与产品上线前终测及产品上线后运营与负责新功能迭代。
                </div>
                <div class="jingyan-title" contenteditable="true">
                  难点与成长
                </div>
                <div class="jingyan-content projectIncome" contenteditable="true">
                  担任项目中产品经理，负责产品战略规划、竞品分析，Axure原型设计，需求文档撰写，项目进程管理、沟通UI、前端、开发、测试及运营，参与产品上线前终测及产品上线后运营与负责新功能迭代。
                </div>
                <i class="delete-jingyan-item layui-icon" onmouseover="layer.msg('删除该项目');"
                   onmouseout="layer.closeAll()" style="display: none;"></i>
              </div>
              <i class="sort-item-jy layui-icon"></i></div>
            <div class="jl-jy-item">
              <div class="jingyan-item" contenteditable="true">
                <div class="jingyan-header">
                  <div class="jingyan-name" contenteditable="true">项目名</div>
                  <div class="jingyan-role" contenteditable="true">研发负责人</div>
                  <div class="jingyan-time" contenteditable="true">时间</div>
                </div>
                <div class="jingyan-title" contenteditable="true">
                  技术栈
                </div>
                <div class="jingyan-content projectTech" contenteditable="true">
                  JDK17 + SpringBoot3.0 + SpringCloud + JPA + MySQL + Redis
                </div>
                <div class="jingyan-title" contenteditable="true">
                  项目简介
                </div>
                <div class="jingyan-content projectDesc" contenteditable="true">
                  以兰花为媒介，制定行业整合平台，去除传统绿植赚取差价的思维模式，将农业市场带向资本市场。将线下的批发行业转战至线上，为线下传统行业提供沟通和链接的平台。解决传统行业人脉滞留单一的痛点，并改变相似行业的竞价关系为合作关系。
                </div>
                <div class="jingyan-title" contenteditable="true">
                  我的职责
                </div>
                <div class="jingyan-content projectWorkContent" contenteditable="true">
                  担任项目中产品经理，负责产品战略规划、竞品分析，Axure原型设计，需求文档撰写，项目进程管理、沟通UI、前端、开发、测试及运营，参与产品上线前终测及产品上线后运营与负责新功能迭代。
                </div>
                <div class="jingyan-title" contenteditable="true">
                  难点与成长
                </div>
                <div class="jingyan-content projectIncome" contenteditable="true">
                  担任项目中产品经理，负责产品战略规划、竞品分析，Axure原型设计，需求文档撰写，项目进程管理、沟通UI、前端、开发、测试及运营，参与产品上线前终测及产品上线后运营与负责新功能迭代。
                </div>
                <i class="delete-jingyan-item layui-icon" onmouseover="layer.msg('删除该项目');"
                   onmouseout="layer.closeAll()" style="display: none;"></i>
              </div>
              <i class="sort-item-jy layui-icon"></i></div>
            <div class="jl-jy-item">
              <div class="jingyan-item" contenteditable="true">
                <div class="jingyan-header">
                  <div class="jingyan-name" contenteditable="true">项目名</div>
                  <div class="jingyan-role" contenteditable="true">研发负责人</div>
                  <div class="jingyan-time" contenteditable="true">时间</div>
                </div>
                <div class="jingyan-title" contenteditable="true">
                  技术栈
                </div>
                <div class="jingyan-content projectTech" contenteditable="true">
                  JDK17 + SpringBoot3.0 + SpringCloud + JPA + MySQL + Redis
                </div>
                <div class="jingyan-title" contenteditable="true">
                  项目简介
                </div>
                <div class="jingyan-content projectDesc" contenteditable="true">
                  以兰花为媒介，制定行业整合平台，去除传统绿植赚取差价的思维模式，将农业市场带向资本市场。将线下的批发行业转战至线上，为线下传统行业提供沟通和链接的平台。解决传统行业人脉滞留单一的痛点，并改变相似行业的竞价关系为合作关系。
                </div>
                <div class="jingyan-title" contenteditable="true">
                  我的职责
                </div>
                <div class="jingyan-content projectWorkContent" contenteditable="true">
                  担任项目中产品经理，负责产品战略规划、竞品分析，Axure原型设计，需求文档撰写，项目进程管理、沟通UI、前端、开发、测试及运营，参与产品上线前终测及产品上线后运营与负责新功能迭代。
                </div>
                <div class="jingyan-title" contenteditable="true">
                  难点与成长
                </div>
                <div class="jingyan-content projectIncome" contenteditable="true">
                  担任项目中产品经理，负责产品战略规划、竞品分析，Axure原型设计，需求文档撰写，项目进程管理、沟通UI、前端、开发、测试及运营，参与产品上线前终测及产品上线后运营与负责新功能迭代。
                </div>
                <i class="delete-jingyan-item layui-icon" onmouseover="layer.msg('删除该项目');"
                   onmouseout="layer.closeAll()" style="display: none;"></i>
              </div>
              <i class="sort-item-jy layui-icon"></i></div>
          </div>
        </div>

        <div class="jl-item">
          <div class="jianli-title">
            <a contenteditable="true">个人总结</a>
          </div>
          <div id="summary" contenteditable="true"><b>5年前端经验，软件开发专业</b>：熟悉前端技术栈，具备一定后端java知识，职业规划是全栈；</div>
          <div id="summary" contenteditable="true"><b>独立开发能力</b>：做过PC端、移动端、微信小程序、数据大屏、H5等类型项目，具备独立开发项目的能力；</div>
          <div id="summary" contenteditable="true"><b>踏实奉献</b>：连续两年获得奉献奖，工作态度端正，做事细心并有耐心，团队沟通融洽，抗压能力强；</div>
          <div id="summary" contenteditable="true"><b>积极上进</b>：查漏补缺，更新自身技术栈，专注技术，提升专业技术水平和学历；</div>
          <i class="sort-item layui-icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="resume">

</script>

<style scoped lang="scss">
.resume-container {
  height: 100vh;
  .base_tools{
    position: fixed;
    top: 80px;
    left: calc((100% - 914px) / 2);
    width: 794px;
    height: 50px;
    line-height: 50px;
    padding: 25px 60px 0px 60px;
    border-radius: 3px;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.9);
    .toolbar{
      position: relative;
      float: left;
      width: 102%;
      height: 40px;
      margin-left: 0px;
      margin-top: 3px;
    }
  }
  .paper {
    position: relative;
    margin: 0px auto 20px auto;
    width: 794px;
    min-height: 500px;
    height: auto;
    background-color: white;
    border-radius: 3px;
    padding: 60px;
    margin-top: 120px;
    margin-bottom: 100px;
    background-image: linear-gradient(0deg, #fff, #f9fbff);
  }
}
</style>