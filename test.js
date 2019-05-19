define(['template', ''],
function(template) {
    return template('_bss_web_view/apps/serviceapps/synergetic-detail/locusDiagram_bak',
    function($data, $filename
    /**/
    ) {
        'use strict';
        var $utils = this,
        $helpers = $utils.$helpers,
        $escape = $utils.$escape,
        workList = $data.workList,
        $each = $utils.$each,
        workOrder = $data.workOrder,
        $index = $data.$index,
        as = $data.as,
        subWo = $data.subWo,
        subSo = $data.subSo,
        subWork = $data.subWork,
        $out = '';
        $out += '\r\n<!--\r\n	作者：zhanggd\r\n	时间：2019-05-13\r\n	描述：轨迹图主页面\r\n-->\r\n<div class="main-contain mgt-20">\r\n	<!--\r\n    	作者：zhanggd\r\n    	时间：2019-05-13\r\n    	描述：最后一个工单节点\r\n    -->\r\n    <p> ';
        $out += $escape(workList.length);
        $out += '   workList.length </p>\r\n	';
        if (workList && workList.length > 0) {
            $out += ' \r\n		';
            $each(workList,
            function(workOrder, $index) {
                $out += ' \r\n			';
                if (workOrder.subOrderFlag == "0") {
                    $out += '\r\n\r\n			';
                } else if (workOrder.subOrderFlag == "1") {
                    $out += ' \r\n			<!-- 有支撑单 -->\r\n				<div class="flow-1  ';
                    if (workOrder.workSts == 'D' || workOrder.workSts == 'P' || workOrder.workSts == 'Q') {
                        $out += ' flow-active ';
                    } else {
                        $out += '  ';
                    }
                    $out += ' ">\r\n					<span class="flow-data flow-data-h">';
                    $out += $escape(workOrder.creatTime);
                    $out += '</span>\r\n					<div class="flow-con mgl-20  ';
                    if (workOrder.workSts == 'D' || workOrder.workSts == 'P' || workOrder.workSts == 'Q') {
                        $out += ' con-active ';
                    } else {
                        $out += ' ';
                    }
                    $out += ' fl">\r\n						<span class="flow-line-t flow-line-h ';
                    if ($index == 0) {
                        $out += ' hide ';
                    } else {
                        $out += ' ';
                    }
                    $out += '"></span> \r\n						<span class="flow-dian"></span>\r\n						<span class="flow-line-b flow-line-h  ';
                    if ($index + 1 == workList.length) {
                        $out += ' hide  ';
                    } else {
                        $out += '   ';
                    }
                    $out += '"></span>\r\n					</div>\r\n					\r\n					<div class="fl  ';
                    if (workOrder.workSts == 'D' || workOrder.workSts == 'P' || workOrder.workSts == 'Q') {
                        $out += ' flow-node-active ';
                    } else {
                        $out += ' flow-node ';
                    }
                    $out += '  mgl-40">\r\n						<span>';
                    $out += $escape(workOrder.stepName);
                    $out += '</span>\r\n					</div>\r\n					<!-- 支撑单列表 -->\r\n					<div class="flow-inf-tab flow-inf-tab1 fl mgl-30 pdt-5">\r\n		        		';
                    $each([],
                    function(as, subWo) {
                        $out += '\r\n						<p class="inf-p-active" > 《  一  》  </p>\r\n						<p class=" inf-p-active  " > 《 ';
                        $out += $escape(subWo.soName);
                        $out += '》 </p>\r\n						';
                    });
                    $out += '\r\n					</div>\r\n					<!-- 支撑单详情页面 -->\r\n					';
                    if (workOrder.subOrderList && workOrder.subOrderList.length > 0) {
                        $out += '\r\n	        			';
                        $each([],
                        function(as, subSo) {
                            $out += '\r\n	        			<!-- 循环工单的支撑单 start -->\r\n	        				<div class="inf-con inf-con2 mgl-10 fl ';
                            if ($index == 0) {
                                $out += '  ';
                            } else {
                                $out += '  hide ';
                            }
                            $out += '">\r\n	        					<p class="inf-h mgb-5">《支撑单';
                            $out += $escape($index + 1);
                            $out += '》</p>\r\n	        					<div class="inf-flow-con">\r\n	        						';
                            if (subSo && subSo.length > 0) {
                                $out += '\r\n	        							';
                                $each([],
                                function(as, subWork) {
                                    $out += '\r\n	        							<!-- 循环支撑单下的工单  start-->\r\n	        								<div class="fl inf-flow-node">\r\n									            <span class="inf-text-h">';
                                    $out += $escape(subWork.stepName);
                                    $out += '</span>\r\n									            <span class="inf-text-2 mgt-5">处理人:';
                                    $out += $escape(subWork.woStaffName);
                                    $out += '</span>\r\n									            <span class="inf-text-2">处理时间:';
                                    $out += $escape(subWork.creatTime);
                                    $out += '</span>\r\n									            <span class="inf-text-2">处理结论:';
                                    $out += $escape(subWork.dealResult);
                                    $out += '</span>\r\n									            <span class="inf-text-2">处理建议:';
                                    $out += $escape(subWork.dealNote);
                                    $out += '</span>\r\n	        								</div>\r\n	        							<!-- 循环支撑单下的工单  end-->\r\n	        							';
                                });
                                $out += '\r\n	        						';
                            }
                            $out += '\r\n	        					</div>\r\n	        				</div>\r\n	        			<!-- 循环工单的支撑单 end -->\r\n	        			';
                        });
                        $out += '\r\n	        		';
                    }
                    $out += '\r\n				</div>				\r\n				\r\n			';
                }
                $out += '\r\n			<!-- 每个节点的分割线 最后一个元素不增加-->	\r\n			';
                if ($index + 1 == workList.length) {
                    $out += '\r\n			';
                } else {
                    $out += '\r\n				<div class="flow-m-line">\r\n					<span class="m-line"></span>\r\n				</div>\r\n			';
                }
                $out += '\r\n			<!-- 每个节点的分割线结束 -->	\r\n		';
            });
            $out += ' \r\n	';
        }
        $out += '\r\n\r\n</div>';
        return new String($out);
    });
});