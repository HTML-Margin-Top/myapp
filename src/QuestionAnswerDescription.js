/**
 * Created by choleece on 2017/7/15.
 */
const QuestionAnswerDescription = {
    "basic": {
        "simple": {
            "sex": {
                "content": "您的性别？",
                "options": [
                    {
                        "value": "M",
                        "text": "男"
                    },
                    {
                        "value": "F",
                        "text": "女"
                    }
                ]
            },
            "marriageHistory": {
                "content": "您的婚姻状况?",
                "options": [
                    {
                        "value": "UM",
                        "text": "未婚"
                    },
                    {
                        "value": "MD",
                        "text": "已婚"
                    },
                    {
                        "value": "DI",
                        "text": "离异"
                    },
                    {
                        "value": "WI",
                        "text": "丧偶"
                    }
                ]
            },
            "alcoholFlag": {
                "content": "您是否饮酒？",
                "options": [
                    {
                        "value": "Y",
                        "text": "是"
                    },
                    {
                        "value": "N",
                        "text": "否"
                    }
                ]
            },
            // "dragFlag": {
            //     "content": "您是否服用药品／毒品？",
            //     "options": [
            //         {
            //             "value": "Y",
            //             "text": "是"
            //         },
            //         {
            //             "value": "N",
            //             "text": "否"
            //         }
            //     ]
            // },
            "dragFlag": {
                "content": "您的吸烟情况？",
                "options": [
                    {
                        "value": "NS", // never smoking
                        "text": "从不吸烟"
                    },
                    {
                        "value": "QS", // quit smoking
                        "text": "已戒烟"
                    },
                    {
                        "value": "OS", //once smoking
                        "text": "偶尔吸几根"
                    },
                    {
                        "value": "LH", // less half
                        "text": "少于半包/天"
                    },
                    {
                        "value": "MH", // more half
                        "text": "半包至一包/天"
                    },
                    {
                        "value": "OT", // one two
                        "text": "一包至两包/天"
                    },
                    {
                        "value": "MT", // more two
                        "text": "两包以上/天"
                    }
                ]
            },
            'qualification': {
                "content": "您的学历是？",
                "options": [
                    {
                        "value": "JM",
                        "text": "初中及以下"
                    },
                    {
                        "value": "SM",
                        "text": "高中"
                    },
                    {
                        "value": "SS",
                        "text": "中专"
                    },
                    {
                        "value": "UG",
                        "text": "本科"
                    },
                    {
                        "value": "GS",
                        "text": "研究生及以上"
                    }
                ]
            }
        },
        "blank": {
            "name": {
                "content": "您好，怎么称呼您？"
            },
            "weight": {
                "content": "您现在的体重是多少kg？"
            },
            "height": {
                "content": "您现在的身高是多少cm？"
            }
        },
        "simple_blank": {
            "nation": {
                "content": "您是哪个民族？",
                "options": [
                    {
                        "text": "汉族",
                        "value": "汉族"
                    },
                    {
                        "text":  "壮族",
                        "value": "壮族"
                    },
                    {
                        "text": "回族",
                        "value": "回族"
                    },
                    {
                        "text": "满族",
                        "value": "满族"
                    },
                    {
                        "text": "维吾尔族",
                        "value": "维吾尔族"
                    },
                    {
                        "text": "苗族",
                        "value": "苗族"
                    },
                    {
                        "text": "彝族",
                        "value": "彝族"
                    },
                    {
                        "text": "土家族",
                        "value": "土家族"
                    },
                    {
                        "text": "藏族",
                        "value": "藏族"
                    },
                    {
                        "text": "蒙古族",
                        "value": "蒙古族"
                    },
                    {
                        "text": "其他民族",
                        "value": "其他民族"
                    }
                ]
            },
            "profession": {
                "content": "请问您的职业是？",
                "options": [
                    {
                        "text": "互联网",
                        "value": "互联网"
                    },
                    {
                        "text":  "金融",
                        "value": "金融"
                    },
                    {
                        "text": "学生",
                        "value": "学生"
                    },
                    {
                        "text": "医疗健康",
                        "value": "医疗健康"
                    },
                    {
                        "text": "商业服务",
                        "value": "商业服务"
                    },
                    {
                        "text": "交通物流",
                        "value": "交通物流"
                    },
                    {
                        "text": "餐饮休闲",
                        "value": "餐饮休闲"
                    },
                    {
                        "text": "政府部门",
                        "value": "政府部门"
                    },
                    {
                        "text": "广告传媒",
                        "value": "广告传媒"
                    },
                    {
                        "text": "其他行业",
                        "value": "其他行业"
                    }
                ]
            }
        }
    },
    "custom": {
        "multi_double": {
            "MINIChoice": {
                "content": "您是否有如下状态／想法／事情？",
                "options": [
                    {
                        "text": "无",
                        "value": "W"
                    },
                    {
                        "text": "抑郁",
                        "value": "A"
                    },
                    {
                        "text": "心情差",
                        "value": "B"
                    },
                    {
                        "text": "自杀",
                        "value": "C"
                    },
                    {
                        "text": "躁狂",
                        "value": "D"
                    },
                    {
                        "text": "惊恐",
                        "value": "E"
                    },
                    {
                        "text": "恐惧症",
                        "value": "G"
                    },
                    {
                        "text": "重复做某件事情",
                        "value": "H"
                    },
                    {
                        "text": "受过创伤",
                        "value": "I"
                    },
                    {
                        "text": "酗酒",
                        "value": "J"
                    },
                    {
                        "text": "物品依赖",
                        "value": "K"
                    },
                    {
                        "text": "厌食",
                        "value": "M"
                    },
                    {
                        "text": "贪食",
                        "value": "N"
                    },
                    {
                        "text": "焦虑",
                        "value": "O"
                    },
                    {
                        "text": "打架",
                        "value": "P"
                    }
                ]
            }
        },
        "blank": {
            "main_reason1": {
                "content": "您此次因为什么来看病？想要医生提供什么帮助？"
            },
            "main_reason2": {
                "content": "这种情况从什么时候开始的？有没有缓解的情况？"
            },
            "main_reason3": {
                "content": "这种情况对日常生活有什么影响？"
            },
            "main_reason4": {
                "content": "还有没有其他的不适或问题？"
            }
        }
    },
    "mini": {
        "multi_double": {
            "K": {
                "K1-b": {
                    "content": "选出下列你曾经服用过的毒品或药品",
                    "options": [
                        {
                            "text": "无",
                            "value": "W"
                        },
                        {
                            "text": "安非他明",
                            "value": "1"
                        },
                        {
                            "text": "安非他明兴奋剂",
                            "value": "2"
                        },
                        {
                            "text": "冰毒",
                            "value": "3"
                        },
                        {
                            "text": "烷基亚硝酸盐",
                            "value": "4"
                        },
                        {
                            "text": "右旋笨丙胺",
                            "value": "5"
                        },
                        {
                            "text": "利他林",
                            "value": "6"
                        },
                        {
                            "text": "减肥丸",
                            "value": "7"
                        },
                        {
                            "text": "鼻吸剂",
                            "value": "8"
                        },
                        {
                            "text": "静脉注射剂",
                            "value": "9"
                        },
                        {
                            "text": "精炼可卡因",
                            "value": "10"
                        },
                        {
                            "text": "纯可卡因",
                            "value": "11"
                        },
                        {
                            "text": "海洛因",
                            "value": "13"
                        },
                        {
                            "text": "吗啡",
                            "value": "14"
                        },
                        {
                            "text": "二氢吗啡酮",
                            "value": "15"
                        },
                        {
                            "text": "鸦片",
                            "value": "16"
                        },
                        {
                            "text": "杜冷丁",
                            "value": "17"
                        },
                        {
                            "text": "美沙酮",
                            "value": "18"
                        },
                        {
                            "text": "可待因",
                            "value": "19"
                        },
                        {
                            "text": "复方羟可酮",
                            "value": "20"
                        },
                        {
                            "text": "丙氧芬",
                            "value": "21"
                        },
                        {
                            "text": "LSD",
                            "value": "22"
                        },
                        {
                            "text": "仙人球毒碱",
                            "value": "23"
                        },
                        {
                            "text": "peyote",
                            "value": "24"
                        },
                        {
                            "text": "苯环已啶",
                            "value": "25"
                        },
                        {
                            "text": "裸头草碱",
                            "value": "26"
                        },
                        {
                            "text": "摇头丸",
                            "value": "28"
                        },
                        {
                            "text": "氯乙烷",
                            "value": "31"
                        },
                        {
                            "text": "掺有其他毒品的可卡因",
                            "value": "12"
                        },
                        {
                            "text": "二甲氧基甲苯异丙胺",
                            "value": "27"
                        },
                        {
                            "text": "甲二氧基苯异丙胺",
                            "value": "29"
                        },
                        {
                            "text": "亚甲二氧基苯异丙胺",
                            "value": "30"
                        },
                        {
                            "text": "一氧化氮(笑气)",
                            "value": "32"
                        },
                        {
                            "text": "亚硝酸戊酯",
                            "value": "33"
                        },
                        {
                            "text": "亚硝酸丁酯",
                            "value": "34"
                        },
                        {
                            "text": "印度大麻",
                            "value": "35"
                        },
                        {
                            "text": "四氢大麻酚",
                            "value": "36"
                        },
                        {
                            "text": "安眠酮",
                            "value": "37"
                        },
                        {
                            "text": "速可眠",
                            "value": "38"
                        },
                        {
                            "text": "安定",
                            "value": "39"
                        },
                        {
                            "text": "阿普唑仑",
                            "value": "40"
                        },
                        {
                            "text": "利眠宁",
                            "value": "41"
                        },
                        {
                            "text": "劳拉西泮",
                            "value": "42"
                        },
                        {
                            "text": "氟西泮",
                            "value": "43"
                        },
                        {
                            "text": "海洛神",
                            "value": "44"
                        },
                        {
                            "text": "巴比妥盐",
                            "value": "45"
                        },
                        {
                            "text": "甲丙氨脂",
                            "value": "46"
                        },
                        {
                            "text": "类固醇",
                            "value": "47"
                        },
                        {
                            "text": "非处方催眠",
                            "value": "48"
                        },
                        {
                            "text": "减肥药",
                            "value": "49"
                        }
                    ]
                }
            }
        },
        "blank": {
            "K": {
                "K1-c": {
                    "content": "您使用最多的毒品或药品?"
                }
            },
            "M": {
                "M1-a": {
                    "content": "你的身高是多少cm？"
                },
                "M1-b": {
                    "content": "过去三个月内，你的最低体重是多少kg？"
                }
            }
        },
        "simple": {
            "A": {
                "A1": {
                    "content": "过去两周内，你是否几乎每天大部分时间都感到忧郁或情绪低落？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A2": {
                    "content": "过去两周的大多数时间内，你是否对大多数事情的兴趣减退，或者对平日喜欢的事情不太喜欢了?",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A3-a": {
                    "content": "你是否几乎每天都有食欲减退或者增加？或者尽管你没有刻意控制体重，但是体重减低或增加？（即体重变化超过±5%。如：体重为70kg的人，在一个月时间内体重变化超过±3.5kg。",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A3-b": {
                    "content": "你是否几乎每晚难以睡眠（入睡难、夜间易醒、早醒或睡眠过多）？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A3-c": {
                    "content": "你是否几乎每天说话或动作都比过去缓慢，或感到烦躁、坐卧不安、难以静坐？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A3-d": {
                    "content": "你是否几乎每天都觉得疲倦，或者没有精力？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A3-e": {
                    "content": "你是否几乎每天都感觉没有价值，或者感觉内疚？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A3-f": {
                    "content": "你是否几乎每天都难以集中注意，或很难做出决定？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A3-g": {
                    "content": "你是否反复想要伤害自己、自杀，或者希望自己死去？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A4-a": {
                    "content": "你在一生中，是否还有其他的、持续两周以上的时间，感到忧郁或者 对大多数事情没有兴趣，并出现上面谈到的大多数问题？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A4-b": {
                    "content": "在上一次抑郁发作和本次抑郁发作之间，你是否有超过两个月的时间不感觉忧郁或丧失兴趣？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            },
            "AA": {
                "A5-a": {
                    "content": "A2编码为‘是’吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A5-b": {
                    "content": "在这次抑郁发作最严重的时候，对于以前给你带来愉快或让你高兴起来的事情，你是否失去了反应能力？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A5-b1": {
                    "content": "遇到好事时，你仍然感觉不好，即使是短暂的？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A6-a": {
                    "content": "你忧郁的感觉与亲人亡故时的感觉不同么？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A6-b": {
                    "content": "你是否几乎每天都感觉早上更重？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A6-c": {
                    "content": "你是否几乎每天早上都比平时早醒2小时，并且无法再入睡？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A6-d": {
                    "content": "A3-a编码‘是’吗？（食欲缺乏或体重减轻）",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A6-e": {
                    "content": "A3-c编码‘是’吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "A6-f": {
                    "content": "你是否有过分的、与现实不符的罪恶感？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            },
            "B": {
                "B1": {
                    "content": "过去两年内，你是否大部分时间都感到悲伤、情绪低落或忧郁？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "B2": {
                    "content": "在这段时间内，你是有两个月以上感到心情不错？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "B3-a": {
                    "content": "你的食欲有明显改变？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "B3-b": {
                    "content": "你是否有睡眠困难或睡眠过多？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "B3-c": {
                    "content": "你是否感到疲倦或缺乏精力？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "B3-d": {
                    "content": "你是否失去了自信？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "B3-e": {
                    "content": "你是否难以集中注意或作出决定？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "B3-f": {
                    "content": "你是否感觉人生没有希望？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "B4": {
                    "content": "这些抑郁症状让你感到非常痛苦，或者损害了你的工作、社交或其他的重要能力吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            },
            "C": {
                "C1": {
                    "content": "在过去一个月内，你是否觉得死了会更好，或者希望自己死了？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "C2": {
                    "content": "在过去一个月内，你是否想要伤害自己？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "C3": {
                    "content": "在过去一个月内，你是否想过自杀？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "C4": {
                    "content": "在过去一个月内，你是否有自杀计划？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "C5": {
                    "content": "在过去一个月内，你是否尝试过自杀？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "C6": {
                    "content": "在你一生中，你曾经尝试过自杀吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            },
            "D": {
                "D1-a": {
                    "content": "你是否曾有一段时间，感觉情绪高涨、精力充沛、自以为是，以至于自己陷入麻烦，或者其他人认为你和平时不一样？（请不要考虑你在酒后或吸毒期间的表现）",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D1-b": {
                    "content": "你现在感到情绪高涨或者精力充沛么？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D2-a": {
                    "content": "你是否曾经有几天时间总是容易发怒，因而与别人发生争执、吵架、打架，或者对外人大喊大叫？你或别人注意到，你即使在觉得自己有理的时候，也比其他人更容易生气或反应过度吗（不考虑醉酒或吸毒时）",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D2-b": {
                    "content": "你现在感觉总是容易发怒吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-a": {
                    "content": "在你感觉情绪高涨、精力充沛或者容易发怒时，你是否感觉你能做别人做不了的事，或者你是一个特别重要的人？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-b": {
                    "content": "在你感觉情绪高涨、精力充沛或者容易发怒时，你是否睡眠需要减少(如“你感觉睡几个小时便休息好了)？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-c": {
                    "content": "在你感觉情绪高涨、精力充沛或者容易发怒时，你是否说话太多停不下来，或者说话太快让别人难以理解？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-d": {
                    "content": "在你感觉情绪高涨、精力充沛或者容易发怒时，你是否思维速度很快？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-e": {
                    "content": "在你感觉情绪高涨、精力充沛或者容易发怒时，你是否容易分散注意力，一点小事都能分散你的注意力？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-f": {
                    "content": "在你感觉情绪高涨、精力充沛或者容易发怒时，你是否变得非常活跃，或者身体静不下来，让别人为你担心？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-g": {
                    "content": "在你感觉情绪高涨、精力充沛或者容易发怒时，你是否过分热衷于参加使自己快乐的活动，而不考虑风险或后果(如乱花钱、莽撞驾驶或性活动轻率)？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-c-a": {
                    "content": "在你现在感觉情绪高涨、精力充沛或者容易发怒时，你是否感觉你能做别人做不了的事，或者你是一个特别重要的人？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-c-b": {
                    "content": "在你现在感觉情绪高涨、精力充沛或者容易发怒时，你是否睡眠需要减少(如“你感觉睡几个小时便休息好了)？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-c-c": {
                    "content": "在你现在感觉情绪高涨、精力充沛或者容易发怒时，你是否说话太多停不下来，或者说话太快让别人难以理解？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-c-d": {
                    "content": "在你现在感觉情绪高涨、精力充沛或者容易发怒时，你是否思维速度很快？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-c-e": {
                    "content": "在你现在感觉情绪高涨、精力充沛或者容易发怒时，你是否容易分散注意力，一点小事都能分散你的注意力？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-c-f": {
                    "content": "在你现在感觉情绪高涨、精力充沛或者容易发怒时，你是否变得非常活跃，或者身体静不下来，让别人为你担心？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-c-g": {
                    "content": "在你现在感觉情绪高涨、精力充沛或者容易发怒时，你是否过分热衷于参加使自己快乐的活动，而不考虑风险或后果(如乱花钱、莽撞驾驶或性活动轻率)？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-p-a": {
                    "content": "在你过去感觉情绪高涨、精力充沛或者容易发怒最明显时，你是否感觉你能做别人做不了的事，或者你是一个特别重要的人？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-p-b": {
                    "content": "在你过去感觉情绪高涨、精力充沛或者容易发怒最明显时，你是否睡眠需要减少(如“你感觉睡几个小时便休息好了)？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-p-c": {
                    "content": "在你过去感觉情绪高涨、精力充沛或者容易发怒最明显时，你是否说话太多停不下来，或者说话太快让别人难以理解？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-p-d": {
                    "content": "在你过去感觉情绪高涨、精力充沛或者容易发怒最明显时，你是否思维速度很快？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-p-e": {
                    "content": "在你过去感觉情绪高涨、精力充沛或者容易发怒最明显时，你是否容易分散注意力，一点小事都能分散你的注意力？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-p-f": {
                    "content": "在你过去感觉情绪高涨、精力充沛或者容易发怒最明显时，你是否变得非常活跃，或者身体静不下来，让别人为你担心？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D3-p-g": {
                    "content": "在你过去感觉情绪高涨、精力充沛或者容易发怒最明显时，你是否过分热衷于参加使自己快乐的活动，而不考虑风险或后果(如乱花钱、莽撞驾驶或性活动轻率)？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D4": {
                    "content": "这些症状持续的最长时间是多久（几乎每天大部分时间都如此的情况）？",
                    "options": [
                        {
                            "value": "3L",
                            "text": "3天或更短"
                        },
                        {
                            "value": "4M",
                            "text": "4天或更长"
                        },
                        {
                            "value": "7M",
                            "text": "7天或更长"
                        }
                    ]
                },
                "D5": {
                    "content": "是否因为这些问题而住过院？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D6": {
                    "content": "这些症状是否给你的家庭，工作，社交或学习带来明显的问题？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "D7": {
                    "content": "这些症状是否导致你的能力出现明显变化或令你变成一个不同的人？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
            },
            "E": {
                "E1": {
                    "content": "你是否曾经两次或多次突然感觉焦虑、害怕、不适或者紧张不安，甚至在大多数人都不会有这种感觉的处境中，你也发作过？这种感觉是否在10分钟内达到最重？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E2": {
                    "content": "在以前任何时候，是否有一些发作意外地或自发地出现，或者这些发作不可预料、没有诱因？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E3": {
                    "content": "以前出现这种发作之后，是否曾经有一个月以上总是担心再次发作，或者担心发作造成的后果？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E4-a": {
                    "content": "在你能记起的最严重的发作期间，你是否感觉心脏跳跃、心跳加快或心脏狂跳？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E4-b": {
                    "content": "在你能记起的最严重的发作期间，你是否出汗或手心潮湿？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E4-c": {
                    "content": "在你能记起的最严重的发作期间，你是否有震颤或发抖？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E4-d": {
                    "content": "在你能记起的最严重的发作期间，你是否呼吸急促或呼吸困难？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E4-e": {
                    "content": "在你能记起的最严重的发作期间，你是否喘不上气或喉咙哽塞？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E4-f": {
                    "content": "在你能记起的最严重的发作期间，你是否有胸痛、胸部压迫感或不适？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E4-g": {
                    "content": "在你能记起的最严重的发作期间，你是否有恶心、胃部不适或者突然腹泻？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E4-h": {
                    "content": "在你能记起的最严重的发作期间，你是否感觉头晕、站立不稳、头重脚轻或晕厥？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E4-i": {
                    "content": "在你能记起的最严重的发作期间，你是否感觉周围的事物变得奇怪、不真实、遥远或陌生，或者觉得与自己身体的部分或全部分离或完全脱离？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E4-j": {
                    "content": "在你能记起的最严重的发作期间，你是否害怕自己会失去控制或发疯？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E4-k": {
                    "content": "在你能记起的最严重的发作期间，你是否害怕自己会死？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E4-l": {
                    "content": "在你能记起的最严重的发作期间，你是否身体的某个部位有麻刺感或麻木感？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E4-m": {
                    "content": "在你能记起的最严重的发作期间，你是否有身体潮红或寒战？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "E6": {
                    "content": "过去一个月内，你反复（≥2 次）出现这种发作，而后总是害怕再次发作吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            },
            "F": {
                "F1": {
                    "content": "在逃生可能困难或者出现惊恐时可能得不到帮助的场所或处境，如在人群中，排队，独自离家或独自在家,过桥，乘坐公共汽车、火车 或小汽车时，你是否会感觉焦虑或者特不自在？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "F2": {
                    "content": "你是否非常害怕这些处境，因而回避它们，或者身处其中要承受痛苦，或者需要他人陪伴才可以面对？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            },
            "G": {
                "G1": {
                    "content": "在过去一个月内，你害怕或苦恼于被别人注视、成为别人注意的焦点或者被侮辱吗？包括当众讲话、当众进食或与他人一起进食、在他人注视下写字或参与社交活动。",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "G2": {
                    "content": "这种恐惧过分或者不合理吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "G3": {
                    "content": "你非常害怕这些处境，因而回避它们，或者在这些处境中感到痛苦吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "G4": {
                    "content": "这种恐惧破坏了你的正常工作或者社会功能，或者给你造成明显的痛苦吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            },
            "H": {
                "H1": {
                    "content": "在过去一个月内，你是否被一些重复出现的想法、冲动或影像所困扰，而这些是无用的、讨厌的、不适宜的、突然冒出来的或者令人痛苦的?(如认为自己肮脏、受到污染或有细菌，或害怕传染他人，或害怕无意中伤害他人，或害怕自己在冲动之下采取行动，或害怕或相信自己会为某些错误承担责任，或沉湎于有关性的想法、影像或冲动，或贮藏、收集物品，或有宗教方面的固执想法。）",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "H2": {
                    "content": "甚至当你想忽略或摆脱它们时，这些想法仍然会不断地出现在脑海中？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "H3": {
                    "content": "你认为这些观念是你自己的想法，而不是外界强加于你的？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "H4": {
                    "content": "在过去一个月内，你是否会无法抗拒地反复做某种事情，如过度洗涤 或清洗，一遍遍地检查或计数，或重复收集、整理、摆放物品，或其他宗教仪式？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "H5": {
                    "content": "你是否意识到，自己无法克制的这些强迫性思维或强迫行为是过分的或不合理的？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "H6": {
                    "content": "这些强迫性思维或强迫行为明显干扰你的正常生活、职业功能、日常社交或关系，或每天耗费在这方面的时间每天超过1小时？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            },
            "I": {
                "I1": {
                    "content": "你是否曾经历、目睹或不得不处理极其严重的创伤性事件，如实际死亡或死亡威胁，或对你或他人的严重伤害？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "I2": {
                    "content": "在过去一个月内，你是否痛苦地重新体验了这个事件（如做梦、紧张 的回忆、闪回或生理反应）？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "I3-a": {
                    "content": "在过去一个月内，你是否曾经避免想起此事，或者避开可提醒该事件的物品？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "I3-b": {
                    "content": "在过去一个月内，你是否曾经难以回忆起所发生事情中的重要部分？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "I3-c": {
                    "content": "在过去一个月内，你是否对原来的爱好或社会活动不太感兴趣了？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "I3-d": {
                    "content": "在过去一个月内，你是否觉得自己和别人变得疏远或陌生？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "I3-e": {
                    "content": "在过去一个月内，你是否注意到自己感觉麻木了？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "I3-f": {
                    "content": "在过去一个月内，你是否觉得自己的生命会因为这个创伤而缩短？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "I4-a": {
                    "content": "在过去一个月内，你睡眠困难吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "I4-b": {
                    "content": "在过去一个月内，你是否特别容易发火，或者曾经大发脾气？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "I4-c": {
                    "content": "在过去一个月内，你是否难以集中注意？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "I4-d": {
                    "content": "在过去一个月内，你是否觉得紧张，或经常处于戒备状态？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "I4-e": {
                    "content": "在过去一个月内，你是否容易受惊吓？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "I5": {
                    "content": "在过去一个月内，这些问题明显干扰了你的工作或社会活动，或者造成明显的痛苦？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            },
            "J": {
                "J1": {
                    "content": "在过去12个月内，你是否喝酒3次以上，每次在3小时内喝酒数量折合成纯酒精30ml以上？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "J2-a": {
                    "content": "在过去12个月内，为了达到与最初喝酒时相同的效果，你是否需要喝更多的酒？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "J2-b": {
                    "content": "在过去12个月内，你在减少饮酒量时，是否有过手抖、出汗或感觉不安？或者，你喝酒是为了避免这些症状，或者避免宿醉反应，如手抖、出汗或不安？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "J2-c": {
                    "content": "在过去12个月内，在喝酒时，你实际喝的酒量超出原先预计的酒量？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "J2-d": {
                    "content": "在过去12个月内，你是否曾经尝试减少酒量或停止饮酒，但是没有成功？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "J2-e": {
                    "content": "在过去12个月内，在饮酒的日子里，你是否花大量的时间找酒、饮酒或醒酒？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "J2-f": {
                    "content": "在过去12个月内，你因为喝酒而减少了工作、业余爱好或与他人相处的时间？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "J2-g": {
                    "content": "在过去12个月内，即使你知道饮酒给自己造成了健康或精神问题，仍然继续喝酒？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "J3-a": {
                    "content": "在过去12个月内，你是否曾多次在上学、上班或在家做事时，喝醉酒、酒后兴奋或处在宿醉中？这种情况造成了什么问题吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "J3-b": {
                    "content": "在过去12个月内，你是否曾在醉酒后，从事有生命危险的活动，如开车、骑摩托车、操作机器、划船等？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "J3-c": {
                    "content": "在过去12个月内，你是否曾经因为喝酒出现过违法问题，如被捕或扰乱治安？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "J3-d": {
                    "content": "在过去12个月内，即使喝酒使你与家人或他人的关系出现问题，你仍然继续喝酒吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            },
            "K": {
                "K1-a": {
                    "content": "在过去12月内，你是否多次使用某种毒品，以达到飘的感觉，让自己感觉更好，或改变自己的心情？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "K2-a": {
                    "content": "你是否发现，你需要使用更大的量，才能达到自己刚开始使用[药品]时的效果？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "K2-b": {
                    "content": "当你减量或者停止使用[药品]时，你是否出现过戒断症状（疼痛、手抖、发热、乏力、腹泻、恶心、出汗、心怦怦跳、睡眠困难、易激动、焦虑、易怒或压抑）或者，你使用这些药物，是为了避免不舒服（戒断症状），或是自己感感觉好一些？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "K2-c": {
                    "content": "在使用[药品]时，你是否发现实际用量比当初预计用量多？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "K2-d": {
                    "content": "你是否曾经尝试减量或停止使用[药品]，但是没有成功？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "K2-e": {
                    "content": "在使用[药品]的日子里，你是否花了大量的时间（大于2小时）获取，使用药物，或者从药物作用中恢复过来，或想着这些药物？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "K2-f": {
                    "content": "你是否因使用药物而减少了工作，从事原有爱好或与亲友相处时间？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "K2-g": {
                    "content": "即使你知道药物给自己造成了健康或者精神问题，你是否仍然继续使用[药品]",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "K3-a": {
                    "content": "你是否曾经在上学、上班或家里有其他事时。多次处于[药品] 的中毒、飘的感觉或后劲之中？这种情况造成了什么问题吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "K3-b": {
                    "content": "你是否曾经在身体可能受伤的情况下（如开车、骑摩托车、操作机器、划船等），使用[药品]达到飘的感觉或中毒？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "K3-c": {
                    "content": "你是否因为使用[药品]出现过违法问题，如被捕或扰乱治安？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "K3-d": {
                    "content": "即使[药品]已经造成你与家人或其他人的关系出现了问题，你仍然继续使用吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            },
            "M": {
                "M2": {
                    "content": "过去三个月内，尽管你体重这么低，你是否仍然尝试不增加体重？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "M3": {
                    "content": "过去三个月内，尽管你体重已经很低，你是否仍然害怕体重增加或者发胖？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "M4-a": {
                    "content": "过去三个月内，你是否认为自己太胖，或者身体某部分太胖?",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "M4-b": {
                    "content": "过去三个月内，你的体重或体形是否严重影响了对自己的感觉",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "M4-c": {
                    "content": "过去三个月内，你是否觉得目前的低体重状态是正常的，或者还是过重?",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "M6": {
                    "content": "在过去三个月内，是否出现了停经？（当时你并未怀孕）",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            },
            "N": {
                "N1": {
                    "content": "在过去的三个月内，你是否曾经暴食，或在两小时内吃下大量食物",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "N2": {
                    "content": "在过去三个月内，你是否每周暴食2次以上？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "N3": {
                    "content": "你暴食的时候，是否感觉无法控制自己的进食？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "N4": {
                    "content": "为了减轻或避免暴食后的体重增加，你是否采取下述行为，如催吐，禁食，运动，服用泻药，灌肠，利尿剂或其他药物？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "N5": {
                    "content": "你的体重或体形是否严重影响了你对自己的感觉？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "N6": {
                    "content": "患者的症状符合神经性厌食的诊断标准吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "N7": {
                    "content": "这种暴食现象只发生在你体重很低的时候吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            },
            "O": {
                "O1-a": {
                    "content": "在过去的六个月内，对日常生活、工作、家庭或者朋友圈中的一些事情，你是否过分担心或焦虑？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "O1-b": {
                    "content": "大多数日子你都很担心吗？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "O2": {
                    "content": "你是否发现很难控制这些担心，或者这些担心的干扰不能使你不能专心做事？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "O3-a": {
                    "content": "在过去的六个月内你感到焦虑时，你几乎每天：感觉不安、紧张或烦躁",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "O3-b": {
                    "content": "在过去的六个月内你感到焦虑时，你几乎每天：感觉肌肉紧张？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "O3-c": {
                    "content": "在过去的六个月内你感到焦虑时，你几乎每天：感觉容易疲劳、乏力或筋疲力尽？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "O3-d": {
                    "content": "在过去的六个月内你感到焦虑时，你几乎每天：难以集中注意力，或感觉头脑一片空白？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "O3-e": {
                    "content": "在过去的六个月内你感到焦虑时，你几乎每天：感到易怒？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "O3-f": {
                    "content": "在过去的六个月内你感到焦虑时，你几乎每天：有睡眠障碍（难以入睡、夜间醒来、早醒或睡眠过多）？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            },
            "P": {
                "P1-a": {
                    "content": "在15岁以前，你是否反复逃学，或从家里出来彻夜不归？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "P1-b": {
                    "content": "在15岁以前，你是否反复说谎、作弊、骗人或偷东西？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "P1-c": {
                    "content": "在15岁以前，你是否挑起打架、欺负弱小、恐吓或威胁他人？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "P1-d": {
                    "content": "在15岁以前，你是否故意损害物品或放火？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "P1-e": {
                    "content": "在15岁以前，你是否故意伤害动物或他人？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "P1-f": {
                    "content": "在15岁以前，你是否强迫别人和你发生性行为？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "P2-a": {
                    "content": "从15岁以后，你是否反复以一种让别人认为你不负责任的方式行事。如欠钱不还、刻意表现冲动或有意不找工作养活自己？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "P2-b": {
                    "content": "从15岁以后，你是否做一些违法的事，即使未被逮到（如：破坏财务、商店行窃、偷东西、贩卖毒品或犯重罪）？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "P2-c": {
                    "content": "从15岁以后，你是否反复与别人打架（包括与配偶或孩子打架）？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "P2-d": {
                    "content": "从15岁以后，你是否经常说谎或欺骗别人以获取财物或取乐，或仅仅为了好玩而骗人？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "P2-e": {
                    "content": "从15岁以后，你是否将他人置于危险之中而不顾？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                },
                "P2-f": {
                    "content": "从15岁以后，你是否伤害、虐待他人、说谎、偷别人东西或者损坏财物后，不感觉内疚？",
                    "options": [
                        {
                            "value": "Y",
                            "text": "是"
                        },
                        {
                            "value": "N",
                            "text": "否"
                        }
                    ]
                }
            }
        }
    },
    "history": {
        "multi_double": {
            "mental": {
                "content": "您过去有没有被诊断过下列精神心理问题？如有，请指明",
                "options": [
                    {
                        "text": "无",
                        "value": "20"
                    },
                    {
                        "value": "1",
                        "text": "双相情感障碍"
                    },
                    {
                        "value": "2",
                        "text": "抑郁症"
                    },
                    {
                        "value": "3",
                        "text": "精神分裂症"
                    },
                    {
                        "value": "4",
                        "text": "自杀"
                    },
                    {
                        "value": "5",
                        "text": "焦虑症"
                    },
                    {
                        "value": "6",
                        "text": "强迫症"
                    },
                    {
                        "value": "7",
                        "text": "惊恐障碍"
                    },
                    {
                        "value": "8",
                        "text": "恐惧症"
                    },
                    {
                        "value": "9",
                        "text": "创伤后应激障碍"
                    },
                    {
                        "value": "10",
                        "text": "其他"
                    }
                ]
            },
            "body": {
                "content": "您过去有没有被诊断过下列躯体疾病？如有，请指明",
                "options": [
                    {
                        "text": "无",
                        "value": "19"
                    },
                    {
                        "value": "11",
                        "text": "甲亢"
                    },
                    {
                        "value": "12",
                        "text": "甲状腺功能减退"
                    },
                    {
                        "value": "13",
                        "text": "桥本甲状腺炎"
                    },
                    {
                        "value": "14",
                        "text": "多囊卵巢综合症"
                    },
                    {
                        "value": "15",
                        "text": "系统性红斑狼疮"
                    },
                    {
                        "value": "16",
                        "text": "冠心病"
                    },
                    {
                        "value": "17",
                        "text": "高血压"
                    },
                    {
                        "value": "18",
                        "text": "其他"
                    }
                ]
            },
            "family": {
                "content": "您直系亲属中有无下列精神心理类疾病的情况？如有，请指明",
                "options": [
                    {
                        "text": "无",
                        "value": "20"
                    },
                    {
                        "value": "1",
                        "text": "双相情感障碍"
                    },
                    {
                        "value": "2",
                        "text": "抑郁症"
                    },
                    {
                        "value": "3",
                        "text": "精神分裂症"
                    },
                    {
                        "value": "4",
                        "text": "自杀"
                    },
                    {
                        "value": "5",
                        "text": "焦虑症"
                    },
                    {
                        "value": "6",
                        "text": "强迫症"
                    },
                    {
                        "value": "7",
                        "text": "惊恐障碍"
                    },
                    {
                        "value": "8",
                        "text": "恐惧症"
                    },
                    {
                        "value": "9",
                        "text": "创伤后应激障碍"
                    },
                    {
                        "value": "10",
                        "text": "其他"
                    }
                ]
            }
        }
    },
    "ade": {
        "simple_double": {
            "X16": {
                "content": "“我今天几乎对任何活动都不感兴趣，就算有参加的活动也觉得很无趣”，这种情况在过去两周中存在几天（可以是零天）？",
                "options": [
                    {
                        "value": "0",
                        "text": "0"
                    },
                    {
                        "value": "1",
                        "text": "1"
                    },
                    {
                        "value": "2",
                        "text": "2"
                    },
                    {
                        "value": "3",
                        "text": "3"
                    },
                    {
                        "value": "4",
                        "text": "4"
                    },
                    {
                        "value": "5",
                        "text": "5"
                    },
                    {
                        "value": "6",
                        "text": "6"
                    },
                    {
                        "value": "7",
                        "text": "7"
                    },
                    {
                        "value": "8",
                        "text": "8"
                    },
                    {
                        "value": "9",
                        "text": "9"
                    },
                    {
                        "value": "10",
                        "text": "10"
                    },
                    {
                        "value": "11",
                        "text": "11"
                    },
                    {
                        "value": "12",
                        "text": "12"
                    },
                    {
                        "value": "13",
                        "text": "13"
                    },
                    {
                        "value": "14",
                        "text": "14"
                    }
                ]
            },
            "X25": {
                "content": "在过去的两周中，你觉得自己异常焦虑的天数有几天（可以是零天）？",
                "options": [
                    {
                        "value": "0",
                        "text": "0"
                    },
                    {
                        "value": "1",
                        "text": "1"
                    },
                    {
                        "value": "2",
                        "text": "2"
                    },
                    {
                        "value": "3",
                        "text": "3"
                    },
                    {
                        "value": "4",
                        "text": "4"
                    },
                    {
                        "value": "5",
                        "text": "5"
                    },
                    {
                        "value": "6",
                        "text": "6"
                    },
                    {
                        "value": "7",
                        "text": "7"
                    },
                    {
                        "value": "8",
                        "text": "8"
                    },
                    {
                        "value": "9",
                        "text": "9"
                    },
                    {
                        "value": "10",
                        "text": "10"
                    },
                    {
                        "value": "11",
                        "text": "11"
                    },
                    {
                        "value": "12",
                        "text": "12"
                    },
                    {
                        "value": "13",
                        "text": "13"
                    },
                    {
                        "value": "14",
                        "text": "14"
                    }
                ]
            },
            "X13": {
                "content": "在过去的两周中，你有几天是在“我今天大部分的时间情绪都很低落、悲伤、沮丧”的状态下度过的？（可以是零天）",
                "options": [
                    {
                        "value": "0",
                        "text": "0"
                    },
                    {
                        "value": "1",
                        "text": "1"
                    },
                    {
                        "value": "2",
                        "text": "2"
                    },
                    {
                        "value": "3",
                        "text": "3"
                    },
                    {
                        "value": "4",
                        "text": "4"
                    },
                    {
                        "value": "5",
                        "text": "5"
                    },
                    {
                        "value": "6",
                        "text": "6"
                    },
                    {
                        "value": "7",
                        "text": "7"
                    },
                    {
                        "value": "8",
                        "text": "8"
                    },
                    {
                        "value": "9",
                        "text": "9"
                    },
                    {
                        "value": "10",
                        "text": "10"
                    },
                    {
                        "value": "11",
                        "text": "11"
                    },
                    {
                        "value": "12",
                        "text": "12"
                    },
                    {
                        "value": "13",
                        "text": "13"
                    },
                    {
                        "value": "14",
                        "text": "14"
                    }
                ]
            }
        },
        "simple": {
            "X65": {
                "content": "你是否存在持续两年以上的如下情况：对于你来说，“我今天大部分时间都不高兴”的日子比“我今天好像一直挺开心的”的日子要多？",
                "options": [
                    {
                        "value": "1.0",
                        "text": "是"
                    },
                    {
                        "value": "0.0",
                        "text": "否"
                    }
                ]
            },
            "Xn11": {
                "content": "如果在你生命中存在过异常情绪高涨的时期，你当时有过十分自大的感觉（不是仅仅比感觉不好时强一点)？",
                "options": [
                    {
                        "value": "1.0",
                        "text": "是"
                    },
                    {
                        "value": "0.0",
                        "text": "否"
                    }
                ]
            },
            "Xn29": {
                "content": "如果在你生命中存在过异常情绪高涨的时期，你的精力有没有在这期间的任何一周中非常充沛，就像永远不会累似的？",
                "options": [
                    {
                        "value": "1.0",
                        "text": "有"
                    },
                    {
                        "value": "0.0",
                        "text": "无"
                    }
                ]
            },
            "Xn55": {
                "content": "是否使用药物或ECT（电抽搐）疗法治疗过情绪高涨或易激惹？",
                "options": [
                    {
                        "value": "1.0",
                        "text": "是"
                    },
                    {
                        "value": "0.0",
                        "text": "否"
                    }
                ]
            },
            "Xn27": {
                "content": "如果在你生命中存在过异常情绪高涨的时期，在期间的任何一周中，你有没有觉得自己容易愤怒？",
                "options": [
                    {
                        "value": "1.0",
                        "text": "有"
                    },
                    {
                        "value": "0.0",
                        "text": "无"
                    }
                ]
            },
            "Xn10": {
                "content": "如果在你生命中存在过异常情绪高涨的时期，你当时有过十分欣快的感觉（不是仅仅比感觉不好时强一点）？",
                "options": [
                    {
                        "value": "1.0",
                        "text": "是"
                    },
                    {
                        "value": "0.0",
                        "text": "否"
                    }
                ]
            },
            "X23": {
                "content": "请给你在过去两周中特别容易发怒的程度打分，用0-4之间的一个数字（0代表无，4代表非常严重）。",
                "options": [
                    {
                        "value": "0",
                        "text": "0"
                    },
                    {
                        "value": "1",
                        "text": "1"
                    },
                    {
                        "value": "2",
                        "text": "2"
                    },
                    {
                        "value": "3",
                        "text": "3"
                    },
                    {
                        "value": "4",
                        "text": "4"
                    }
                ]
            },
            "X17": {
                "content": "请给你在过去两周中兴趣缺失的程度打分，用0-4之间的一个数字（0代表无，4代表非常严重）。",
                "options": [
                    {
                        "value": "0",
                        "text": "0"
                    },
                    {
                        "value": "1",
                        "text": "1"
                    },
                    {
                        "value": "2",
                        "text": "2"
                    },
                    {
                        "value": "3",
                        "text": "3"
                    },
                    {
                        "value": "4",
                        "text": "4"
                    }
                ]
            },
            "X14": {
                "content": "请给你在过去两周中悲伤沮丧的程度打分，用0-4之间的一个数字（0代表无，4代表非常严重）。",
                "options": [
                    {
                        "value": "0",
                        "text": "0"
                    },
                    {
                        "value": "1",
                        "text": "1"
                    },
                    {
                        "value": "2",
                        "text": "2"
                    },
                    {
                        "value": "3",
                        "text": "3"
                    },
                    {
                        "value": "4",
                        "text": "4"
                    }
                ]
            }
        },
        "blank": {
            "X21": {
                "content": "在过去的一年中，你感觉到异常的情绪高涨的日子所占的百分比是__%？"
            },
            "X16": {
                "content": "“我今天几乎对任何活动都不感兴趣，就算有参加的活动也觉得很无趣”，这种情况在过去两周中存在几天（可以是零天）？"
            },
            "X25": {
                "content": "在过去的两周中，你觉得自己异常焦虑的天数有几天（可以是零天）？"
            },
            "X13": {
                "content": "在过去的两周中，你有几天是在“我今天大部分的时间情绪都很低落、悲伤、沮丧”的状态下度过的？（可以是零天）"
            },
            "X27": {
                "content": "在过去一年中，你觉得异常焦虑的日子大概占全年的百分之多少__%？"
            },
            "X18": {
                "content": "在过去的一年中，“我今天对什么活动都不感兴趣”这样的日子占百分之多少__%？"
            },
            "Xn55": {
                "content": "您第一次使用药物或ECT（电抽搐）疗法治疗过情绪高涨或易激惹是多大年纪？"
            }
        }
    }
};

export default QuestionAnswerDescription;