(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{551:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("编写一个程序，找到两个单链表相交的起始节点。")])]),t._v(" "),a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/intersection-of-two-linked-lists/",target:"_blank",rel:"noopener noreferrer"}},[t._v("160. 相交链表"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("难度简单")]),t._v(" "),a("p",[t._v("编写一个程序，找到两个单链表相交的起始节点。")]),t._v(" "),a("p",[t._v("如下面的两个链表：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.loli.net/2021/01/13/ExeHCTtFIbkGJXi.png",alt:"img"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("在节点 c1 开始相交。")]),t._v(" "),a("p",[a("strong",[t._v("示例 1：")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://assets.leetcode.com/uploads/2018/12/13/160_example_1.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.loli.net/2021/01/13/w6RjpTXf8mL3tia.png",alt:"img"}}),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3\n输出：Reference of the node with value = 8\n输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。\n")])])]),a("p",[a("strong",[t._v("示例 2：")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://assets.leetcode.com/uploads/2018/12/13/160_example_2.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.loli.net/2021/01/13/CqDynOHkEtM5cB3.png",alt:"img"}}),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1\n输出：Reference of the node with value = 2\n输入解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。\n")])])]),a("p",[a("strong",[t._v("示例 3：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/01/13/yJiV7w5OmMBAQkC.png",alt:"img"}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2\n输出：null\n输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。\n解释：这两个链表不相交，因此返回 null。\n")])])]),a("p",[a("strong",[t._v("注意：")])]),t._v(" "),a("ul",[a("li",[t._v("如果两个链表没有交点，返回 "),a("code",[t._v("null")]),t._v(".")]),t._v(" "),a("li",[t._v("在返回结果后，两个链表仍须保持原有的结构。")]),t._v(" "),a("li",[t._v("可假定整个链表结构中没有循环。")]),t._v(" "),a("li",[t._v("程序尽量满足 O("),a("em",[t._v("n")]),t._v(") 时间复杂度，且仅用 O("),a("em",[t._v("1")]),t._v(") 内存。")])]),t._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("p",[a("strong",[t._v("我的思路")]),t._v("：两个指针移动的速度相同，如果要检测两个指针指向的节点是否相同，只需要两个指针对齐。")]),t._v(" "),a("p",[t._v("这里的对齐就是，指针不会一个在前，一个在后，它们顺次往后移动，直到末端的次数是相同的，如果中途有链表重合的情况，就会出现两个指针指向同一个节点，所以只需要判断两个指针所指向的节点是否相同。")]),t._v(" "),a("p",[a("strong",[t._v("那么如何对齐呢")]),t._v("？")]),t._v(" "),a("p",[t._v("两条链表中选择最小长度作为本次检测的长度。假设长链表L1，短链表L2.指向长链表指针P，短链表指针q.")]),t._v(" "),a("p",[a("u",[t._v("长链表需要截断一部分，也就是单独移动p指针"),a("code",[t._v("L1-L2")]),t._v("次。")])]),t._v(" "),a("p",[t._v("之后p指针和q指针同时移动，检查所指向的节点是否相同。")]),t._v(" "),a("p",[t._v("如果相同则返回，如果检测过程中有指针为空，则直接退出，说明两条链表没有相交，返回null即可。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("下面是另外一种思路（代码二）")]),t._v(" "),a("p",[t._v("（1）如果链表1和链表2相交:  链表1："),a("code",[t._v("a + c")]),t._v("，链表2： "),a("code",[t._v("b + c")]),t._v("，其中c为链表1和链表2的公共部分，a为链表1独有部分，b为链表2独有部分。")]),t._v(" "),a("p",[t._v("那么"),a("code",[t._v("a + c + b = b + c + a")])]),t._v(" "),a("p",[t._v("最后一段路程c，链表1和链表2 肩并肩手牵手一起走的。")]),t._v(" "),a("p",[t._v("要想实现"),a("code",[t._v("a + c + b = b + c + a")]),t._v("，只需要当链表1的指针走到末端时，将指针指向链表2的头结点；当链表2的指针走到末端时，将指针指向链表1的头结点。")]),t._v(" "),a("p",[t._v("（2）如果链表1和链表2不相交: 链表1："),a("code",[t._v("a")]),t._v("，链表2： "),a("code",[t._v("b")]),t._v("；")]),t._v(" "),a("p",[t._v("那么"),a("code",[t._v("a + b = b + a")]),t._v("，最后a和b在null处相遇。")]),t._v(" "),a("h2",{attrs:{id:"代码一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码一"}},[t._v("#")]),t._v(" 代码一")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getIntersectionNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" headA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" headB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" len1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" len2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            len1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            len2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" len1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" len2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" len2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" len1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            len1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            len2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/01/03/5ySY7KjO2utVoNb.png",alt:"image-20210103144325190"}})]),t._v(" "),a("h2",{attrs:{id:"代码二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码二"}},[t._v("#")]),t._v(" 代码二")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getIntersectionNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" headA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" headB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("headA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" headB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" headB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" headA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/01/03/9sZTSw8EQ2bJMyt.png",alt:"image-20210103151301464"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);