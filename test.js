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
        $out += '\r\n<!--\r\n	���ߣ�zhanggd\r\n	ʱ�䣺2019-05-13\r\n	�������켣ͼ��ҳ��\r\n-->\r\n<div class="main-contain mgt-20">\r\n	<!--\r\n    	���ߣ�zhanggd\r\n    	ʱ�䣺2019-05-13\r\n    	���������һ�������ڵ�\r\n    -->\r\n    <p> ';
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
                    $out += ' \r\n			<!-- ��֧�ŵ� -->\r\n				<div class="flow-1  ';
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
                    $out += '</span>\r\n					</div>\r\n					<!-- ֧�ŵ��б� -->\r\n					<div class="flow-inf-tab flow-inf-tab1 fl mgl-30 pdt-5">\r\n		        		';
                    $each([],
                    function(as, subWo) {
                        $out += '\r\n						<p class="inf-p-active" > ��  һ  ��  </p>\r\n						<p class=" inf-p-active  " > �� ';
                        $out += $escape(subWo.soName);
                        $out += '�� </p>\r\n						';
                    });
                    $out += '\r\n					</div>\r\n					<!-- ֧�ŵ�����ҳ�� -->\r\n					';
                    if (workOrder.subOrderList && workOrder.subOrderList.length > 0) {
                        $out += '\r\n	        			';
                        $each([],
                        function(as, subSo) {
                            $out += '\r\n	        			<!-- ѭ��������֧�ŵ� start -->\r\n	        				<div class="inf-con inf-con2 mgl-10 fl ';
                            if ($index == 0) {
                                $out += '  ';
                            } else {
                                $out += '  hide ';
                            }
                            $out += '">\r\n	        					<p class="inf-h mgb-5">��֧�ŵ�';
                            $out += $escape($index + 1);
                            $out += '��</p>\r\n	        					<div class="inf-flow-con">\r\n	        						';
                            if (subSo && subSo.length > 0) {
                                $out += '\r\n	        							';
                                $each([],
                                function(as, subWork) {
                                    $out += '\r\n	        							<!-- ѭ��֧�ŵ��µĹ���  start-->\r\n	        								<div class="fl inf-flow-node">\r\n									            <span class="inf-text-h">';
                                    $out += $escape(subWork.stepName);
                                    $out += '</span>\r\n									            <span class="inf-text-2 mgt-5">������:';
                                    $out += $escape(subWork.woStaffName);
                                    $out += '</span>\r\n									            <span class="inf-text-2">����ʱ��:';
                                    $out += $escape(subWork.creatTime);
                                    $out += '</span>\r\n									            <span class="inf-text-2">�������:';
                                    $out += $escape(subWork.dealResult);
                                    $out += '</span>\r\n									            <span class="inf-text-2">������:';
                                    $out += $escape(subWork.dealNote);
                                    $out += '</span>\r\n	        								</div>\r\n	        							<!-- ѭ��֧�ŵ��µĹ���  end-->\r\n	        							';
                                });
                                $out += '\r\n	        						';
                            }
                            $out += '\r\n	        					</div>\r\n	        				</div>\r\n	        			<!-- ѭ��������֧�ŵ� end -->\r\n	        			';
                        });
                        $out += '\r\n	        		';
                    }
                    $out += '\r\n				</div>				\r\n				\r\n			';
                }
                $out += '\r\n			<!-- ÿ���ڵ�ķָ��� ���һ��Ԫ�ز�����-->	\r\n			';
                if ($index + 1 == workList.length) {
                    $out += '\r\n			';
                } else {
                    $out += '\r\n				<div class="flow-m-line">\r\n					<span class="m-line"></span>\r\n				</div>\r\n			';
                }
                $out += '\r\n			<!-- ÿ���ڵ�ķָ��߽��� -->	\r\n		';
            });
            $out += ' \r\n	';
        }
        $out += '\r\n\r\n</div>';
        return new String($out);
    });
});