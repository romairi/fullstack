const papers = [
    {
        "id": "http://arxiv.org/abs/1908.10515v1",
        "title": "Deep unsupervised learning of turbulence for inflow generation at\n  various Reynolds numbers",
        "summary": "A realistic inflow boundary condition is essential for successful simulation\nof the developing turbulent boundary layer or channel flows. Recent advances in\nartificial intelligence (AI) have enabled the development of an inflow\ngenerator that performs better than the synthetic methods based on intuitions.\nIn the present work, we applied generative adversarial networks (GANs), a\nrepresentative of unsupervised learning, to generate an inlet boundary\ncondition of turbulent channel flow. Upon learning the two-dimensional spatial\nstructure of turbulence using data obtained from direct numerical simulation\n(DNS) of turbulent channel flow, the GAN could generate instantaneous flow\nfields that are statistically similar to those of DNS. Surprisingly, the GAN\ncould produce fields at various Reynolds numbers without any additional\nsimulation based on the trained data of only three Reynolds numbers. This\nindicates that the GAN could learn the universal nature of Reynolds number\neffect and might reflect other simulation conditions. Eventually, through a\ncombination of the GAN and a recurrent neural network (RNN), we developed a\nnovel model (RNN-GAN) that could generate time-varying fully developed flow for\na long time. The spatiotemporal correlations of the generated flow are in good\nagreement with those of the DNS. This proves the usefulness of unsupervised\nlearning in the generation of synthetic turbulence fields.",
        "authors": [
            [
                "Junhyuk Kim"
            ],
            [
                "Changhoon Lee"
            ]
        ],
        "links": [
            {
                "title": "doi",
                "href": "http://dx.doi.org/10.1016/j.jcp.2019.109216",
                "rel": "related"
            },
            {
                "href": "http://arxiv.org/abs/1908.10515v1",
                "rel": "alternate",
                "type": "text/html"
            },
            {
                "title": "pdf",
                "href": "http://arxiv.org/pdf/1908.10515v1",
                "rel": "related",
                "type": "application/pdf"
            }
        ],
        "published": "2019-08-28T01:20:41Z",
        "updated": "2019-08-28T01:20:41Z",
        "categories": [
            {
                "term": "physics.flu-dyn",
                "scheme": "http://arxiv.org/schemas/atom"
            },
            {
                "term": "physics.comp-ph",
                "scheme": "http://arxiv.org/schemas/atom"
            }
        ]
    },
    {
        "id": "http://arxiv.org/abs/1705.08639v2",
        "title": "Fast-Slow Recurrent Neural Networks",
        "summary": "Processing sequential data of variable length is a major challenge in a wide\nrange of applications, such as speech recognition, language modeling,\ngenerative image modeling and machine translation. Here, we address this\nchallenge by proposing a novel recurrent neural network (RNN) architecture, the\nFast-Slow RNN (FS-RNN). The FS-RNN incorporates the strengths of both\nmultiscale RNNs and deep transition RNNs as it processes sequential data on\ndifferent timescales and learns complex transition functions from one time step\nto the next. We evaluate the FS-RNN on two character level language modeling\ndata sets, Penn Treebank and Hutter Prize Wikipedia, where we improve state of\nthe art results to $1.19$ and $1.25$ bits-per-character (BPC), respectively. In\naddition, an ensemble of two FS-RNNs achieves $1.20$ BPC on Hutter Prize\nWikipedia outperforming the best known compression algorithm with respect to\nthe BPC measure. We also present an empirical investigation of the learning and\nnetwork dynamics of the FS-RNN, which explains the improved performance\ncompared to other RNN architectures. Our approach is general as any kind of RNN\ncell is a possible building block for the FS-RNN architecture, and thus can be\nflexibly applied to different tasks.",
        "authors": [
            [
                "Asier Mujika"
            ],
            [
                "Florian Meier"
            ],
            [
                "Angelika Steger"
            ]
        ],
        "links": [
            {
                "href": "http://arxiv.org/abs/1705.08639v2",
                "rel": "alternate",
                "type": "text/html"
            },
            {
                "title": "pdf",
                "href": "http://arxiv.org/pdf/1705.08639v2",
                "rel": "related",
                "type": "application/pdf"
            }
        ],
        "published": "2017-05-24T07:41:03Z",
        "updated": "2017-06-09T20:00:18Z",
        "categories": [
            {
                "term": "cs.NE",
                "scheme": "http://arxiv.org/schemas/atom"
            }
        ]
    },
    {
        "id": "http://arxiv.org/abs/1810.10708v2",
        "title": "Learning with Interpretable Structure from Gated RNN",
        "summary": "The interpretability of deep learning models has raised extended attention\nthese years. It will be beneficial if we can learn an interpretable structure\nfrom deep learning models. In this paper, we focus on Recurrent Neural\nNetworks~(RNNs) especially gated RNNs whose inner mechanism is still not\nclearly understood. We find that Finite State Automaton~(FSA) that processes\nsequential data has more interpretable inner mechanism according to the\ndefinition of interpretability and can be learned from RNNs as the\ninterpretable structure. We propose two methods to learn FSA from RNN based on\ntwo different clustering methods. With the learned FSA and via experiments on\nartificial and real datasets, we find that FSA is more trustable than the RNN\nfrom which it learned, which gives FSA a chance to substitute RNNs in\napplications involving humans' lives or dangerous facilities. Besides, we\nanalyze how the number of gates affects the performance of RNN. Our result\nsuggests that gate in RNN is important but the less the better, which could be\na guidance to design other RNNs. Finally, we observe that the FSA learned from\nRNN gives semantic aggregated states and its transition graph shows us a very\ninteresting vision of how RNNs intrinsically handle text classification tasks.",
        "authors": [
            [
                "Bo-Jian Hou"
            ],
            [
                "Zhi-Hua Zhou"
            ]
        ],
        "links": [
            {
                "href": "http://arxiv.org/abs/1810.10708v2",
                "rel": "alternate",
                "type": "text/html"
            },
            {
                "title": "pdf",
                "href": "http://arxiv.org/pdf/1810.10708v2",
                "rel": "related",
                "type": "application/pdf"
            }
        ],
        "published": "2018-10-25T03:42:08Z",
        "updated": "2020-01-14T12:07:02Z",
        "categories": [
            {
                "term": "cs.NE",
                "scheme": "http://arxiv.org/schemas/atom"
            },
            {
                "term": "cs.LG",
                "scheme": "http://arxiv.org/schemas/atom"
            }
        ]
    },
    {
        "id": "http://arxiv.org/abs/1810.08653v1",
        "title": "Deep Learning with the Random Neural Network and its Applications",
        "summary": "The random neural network (RNN) is a mathematical model for an \"integrate and\nfire\" spiking network that closely resembles the stochastic behaviour of\nneurons in mammalian brains. Since its proposal in 1989, there have been\nnumerous investigations into the RNN's applications and learning algorithms.\nDeep learning (DL) has achieved great success in machine learning. Recently,\nthe properties of the RNN for DL have been investigated, in order to combine\ntheir power. Recent results demonstrate that the gap between RNNs and DL can be\nbridged and the DL tools based on the RNN are faster and can potentially be\nused with less energy expenditure than existing methods.",
        "authors": [
            [
                "Yonghua Yin"
            ]
        ],
        "links": [
            {
                "href": "http://arxiv.org/abs/1810.08653v1",
                "rel": "alternate",
                "type": "text/html"
            },
            {
                "title": "pdf",
                "href": "http://arxiv.org/pdf/1810.08653v1",
                "rel": "related",
                "type": "application/pdf"
            }
        ],
        "published": "2018-10-08T14:47:51Z",
        "updated": "2018-10-08T14:47:51Z",
        "categories": [
            {
                "term": "cs.NE",
                "scheme": "http://arxiv.org/schemas/atom"
            },
            {
                "term": "cs.LG",
                "scheme": "http://arxiv.org/schemas/atom"
            }
        ]
    },
    {
        "id": "http://arxiv.org/abs/1807.01705v1",
        "title": "Transfer Learning for Clinical Time Series Analysis using Recurrent\n  Neural Networks",
        "summary": "Deep neural networks have shown promising results for various clinical\nprediction tasks such as diagnosis, mortality prediction, predicting duration\nof stay in hospital, etc. However, training deep networks -- such as those\nbased on Recurrent Neural Networks (RNNs) -- requires large labeled data, high\ncomputational resources, and significant hyperparameter tuning effort. In this\nwork, we investigate as to what extent can transfer learning address these\nissues when using deep RNNs to model multivariate clinical time series. We\nconsider transferring the knowledge captured in an RNN trained on several\nsource tasks simultaneously using a large labeled dataset to build the model\nfor a target task with limited labeled data. An RNN pre-trained on several\ntasks provides generic features, which are then used to build simpler linear\nmodels for new target tasks without training task-specific RNNs. For\nevaluation, we train a deep RNN to identify several patient phenotypes on time\nseries from MIMIC-III database, and then use the features extracted using that\nRNN to build classifiers for identifying previously unseen phenotypes, and also\nfor a seemingly unrelated task of in-hospital mortality. We demonstrate that\n(i) models trained on features extracted using pre-trained RNN outperform or,\nin the worst case, perform as well as task-specific RNNs; (ii) the models using\nfeatures from pre-trained models are more robust to the size of labeled data\nthan task-specific RNNs; and (iii) features extracted using pre-trained RNN are\ngeneric enough and perform better than typical statistical hand-crafted\nfeatures.",
        "authors": [
            [
                "Priyanka Gupta"
            ],
            [
                "Pankaj Malhotra"
            ],
            [
                "Lovekesh Vig"
            ],
            [
                "Gautam Shroff"
            ]
        ],
        "links": [
            {
                "href": "http://arxiv.org/abs/1807.01705v1",
                "rel": "alternate",
                "type": "text/html"
            },
            {
                "title": "pdf",
                "href": "http://arxiv.org/pdf/1807.01705v1",
                "rel": "related",
                "type": "application/pdf"
            }
        ],
        "published": "2018-07-04T12:42:48Z",
        "updated": "2018-07-04T12:42:48Z",
        "categories": [
            {
                "term": "cs.LG",
                "scheme": "http://arxiv.org/schemas/atom"
            },
            {
                "term": "stat.ML",
                "scheme": "http://arxiv.org/schemas/atom"
            }
        ]
    },
    {
        "id": "http://arxiv.org/abs/1312.6026v5",
        "title": "How to Construct Deep Recurrent Neural Networks",
        "summary": "In this paper, we explore different ways to extend a recurrent neural network\n(RNN) to a \\textit{deep} RNN. We start by arguing that the concept of depth in\nan RNN is not as clear as it is in feedforward neural networks. By carefully\nanalyzing and understanding the architecture of an RNN, however, we find three\npoints of an RNN which may be made deeper; (1) input-to-hidden function, (2)\nhidden-to-hidden transition and (3) hidden-to-output function. Based on this\nobservation, we propose two novel architectures of a deep RNN which are\northogonal to an earlier attempt of stacking multiple recurrent layers to build\na deep RNN (Schmidhuber, 1992; El Hihi and Bengio, 1996). We provide an\nalternative interpretation of these deep RNNs using a novel framework based on\nneural operators. The proposed deep RNNs are empirically evaluated on the tasks\nof polyphonic music prediction and language modeling. The experimental result\nsupports our claim that the proposed deep RNNs benefit from the depth and\noutperform the conventional, shallow RNNs.",
        "authors": [
            [
                "Razvan Pascanu"
            ],
            [
                "Caglar Gulcehre"
            ],
            [
                "Kyunghyun Cho"
            ],
            [
                "Yoshua Bengio"
            ]
        ],
        "links": [
            {
                "href": "http://arxiv.org/abs/1312.6026v5",
                "rel": "alternate",
                "type": "text/html"
            },
            {
                "title": "pdf",
                "href": "http://arxiv.org/pdf/1312.6026v5",
                "rel": "related",
                "type": "application/pdf"
            }
        ],
        "published": "2013-12-20T16:39:39Z",
        "updated": "2014-04-24T15:17:07Z",
        "categories": [
            {
                "term": "cs.NE",
                "scheme": "http://arxiv.org/schemas/atom"
            },
            {
                "term": "cs.LG",
                "scheme": "http://arxiv.org/schemas/atom"
            },
            {
                "term": "stat.ML",
                "scheme": "http://arxiv.org/schemas/atom"
            }
        ]
    },
    {
        "id": "http://arxiv.org/abs/1502.02367v4",
        "title": "Gated Feedback Recurrent Neural Networks",
        "summary": "In this work, we propose a novel recurrent neural network (RNN) architecture.\nThe proposed RNN, gated-feedback RNN (GF-RNN), extends the existing approach of\nstacking multiple recurrent layers by allowing and controlling signals flowing\nfrom upper recurrent layers to lower layers using a global gating unit for each\npair of layers. The recurrent signals exchanged between layers are gated\nadaptively based on the previous hidden states and the current input. We\nevaluated the proposed GF-RNN with different types of recurrent units, such as\ntanh, long short-term memory and gated recurrent units, on the tasks of\ncharacter-level language modeling and Python program evaluation. Our empirical\nevaluation of different RNN units, revealed that in both tasks, the GF-RNN\noutperforms the conventional approaches to build deep stacked RNNs. We suggest\nthat the improvement arises because the GF-RNN can adaptively assign different\nlayers to different timescales and layer-to-layer interactions (including the\ntop-down ones which are not usually present in a stacked RNN) by learning to\ngate these interactions.",
        "authors": [
            [
                "Junyoung Chung"
            ],
            [
                "Caglar Gulcehre"
            ],
            [
                "Kyunghyun Cho"
            ],
            [
                "Yoshua Bengio"
            ]
        ],
        "links": [
            {
                "href": "http://arxiv.org/abs/1502.02367v4",
                "rel": "alternate",
                "type": "text/html"
            },
            {
                "title": "pdf",
                "href": "http://arxiv.org/pdf/1502.02367v4",
                "rel": "related",
                "type": "application/pdf"
            }
        ],
        "published": "2015-02-09T05:25:54Z",
        "updated": "2015-06-17T06:26:21Z",
        "categories": [
            {
                "term": "cs.NE",
                "scheme": "http://arxiv.org/schemas/atom"
            },
            {
                "term": "cs.LG",
                "scheme": "http://arxiv.org/schemas/atom"
            },
            {
                "term": "stat.ML",
                "scheme": "http://arxiv.org/schemas/atom"
            }
        ]
    },
    {
        "id": "http://arxiv.org/abs/1604.03640v1",
        "title": "Bridging the Gaps Between Residual Learning, Recurrent Neural Networks\n  and Visual Cortex",
        "summary": "We discuss relations between Residual Networks (ResNet), Recurrent Neural\nNetworks (RNNs) and the primate visual cortex. We begin with the observation\nthat a shallow RNN is exactly equivalent to a very deep ResNet with weight\nsharing among the layers. A direct implementation of such a RNN, although\nhaving orders of magnitude fewer parameters, leads to a performance similar to\nthe corresponding ResNet. We propose 1) a generalization of both RNN and ResNet\narchitectures and 2) the conjecture that a class of moderately deep RNNs is a\nbiologically-plausible model of the ventral stream in visual cortex. We\ndemonstrate the effectiveness of the architectures by testing them on the\nCIFAR-10 dataset.",
        "authors": [
            [
                "Qianli Liao"
            ],
            [
                "Tomaso Poggio"
            ]
        ],
        "links": [
            {
                "href": "http://arxiv.org/abs/1604.03640v1",
                "rel": "alternate",
                "type": "text/html"
            },
            {
                "title": "pdf",
                "href": "http://arxiv.org/pdf/1604.03640v1",
                "rel": "related",
                "type": "application/pdf"
            }
        ],
        "published": "2016-04-13T02:59:34Z",
        "updated": "2016-04-13T02:59:34Z",
        "categories": [
            {
                "term": "cs.LG",
                "scheme": "http://arxiv.org/schemas/atom"
            },
            {
                "term": "cs.NE",
                "scheme": "http://arxiv.org/schemas/atom"
            }
        ]
    },
    {
        "id": "http://arxiv.org/abs/2003.08334v1",
        "title": "Interpretable Deep Recurrent Neural Networks via Unfolding Reweighted\n  $\\ell_1$-$\\ell_1$ Minimization: Architecture Design and Generalization\n  Analysis",
        "summary": "Deep unfolding methods---for example, the learned iterative shrinkage\nthresholding algorithm (LISTA)---design deep neural networks as learned\nvariations of optimization methods. These networks have been shown to achieve\nfaster convergence and higher accuracy than the original optimization methods.\nIn this line of research, this paper develops a novel deep recurrent neural\nnetwork (coined reweighted-RNN) by the unfolding of a reweighted\n$\\ell_1$-$\\ell_1$ minimization algorithm and applies it to the task of\nsequential signal reconstruction. To the best of our knowledge, this is the\nfirst deep unfolding method that explores reweighted minimization. Due to the\nunderlying reweighted minimization model, our RNN has a different\nsoft-thresholding function (alias, different activation functions) for each\nhidden unit in each layer. Furthermore, it has higher network expressivity than\nexisting deep unfolding RNN models due to the over-parameterizing weights.\nImportantly, we establish theoretical generalization error bounds for the\nproposed reweighted-RNN model by means of Rademacher complexity. The bounds\nreveal that the parameterization of the proposed reweighted-RNN ensures good\ngeneralization. We apply the proposed reweighted-RNN to the problem of video\nframe reconstruction from low-dimensional measurements, that is, sequential\nframe reconstruction. The experimental results on the moving MNIST dataset\ndemonstrate that the proposed deep reweighted-RNN significantly outperforms\nexisting RNN models.",
        "authors": [
            [
                "Huynh Van Luong"
            ],
            [
                "Boris Joukovsky"
            ],
            [
                "Nikos Deligiannis"
            ]
        ],
        "links": [
            {
                "href": "http://arxiv.org/abs/2003.08334v1",
                "rel": "alternate",
                "type": "text/html"
            },
            {
                "title": "pdf",
                "href": "http://arxiv.org/pdf/2003.08334v1",
                "rel": "related",
                "type": "application/pdf"
            }
        ],
        "published": "2020-03-18T17:02:10Z",
        "updated": "2020-03-18T17:02:10Z",
        "categories": [
            {
                "term": "cs.LG",
                "scheme": "http://arxiv.org/schemas/atom"
            },
            {
                "term": "cs.AI",
                "scheme": "http://arxiv.org/schemas/atom"
            },
            {
                "term": "stat.ML",
                "scheme": "http://arxiv.org/schemas/atom"
            }
        ]
    },
    {
        "id": "http://arxiv.org/abs/1709.00939v1",
        "title": "DR-RNN: A deep residual recurrent neural network for model reduction",
        "summary": "We introduce a deep residual recurrent neural network (DR-RNN) as an\nefficient model reduction technique for nonlinear dynamical systems. The\ndeveloped DR-RNN is inspired by the iterative steps of line search methods in\nfinding the residual minimiser of numerically discretized differential\nequations. We formulate this iterative scheme as stacked recurrent neural\nnetwork (RNN) embedded with the dynamical structure of the emulated\ndifferential equations. Numerical examples demonstrate that DR-RNN can\neffectively emulate the full order models of nonlinear physical systems with a\nsignificantly lower number of parameters in comparison to standard RNN\narchitectures. Further, we combined DR-RNN with Proper Orthogonal Decomposition\n(POD) for model reduction of time dependent partial differential equations. The\npresented numerical results show the stability of proposed DR-RNN as an\nexplicit reduced order technique. We also show significant gains in accuracy by\nincreasing the depth of proposed DR-RNN similar to other applications of deep\nlearning.",
        "authors": [
            [
                "J. Nagoor Kani"
            ],
            [
                "Ahmed H. Elsheikh"
            ]
        ],
        "links": [
            {
                "href": "http://arxiv.org/abs/1709.00939v1",
                "rel": "alternate",
                "type": "text/html"
            },
            {
                "title": "pdf",
                "href": "http://arxiv.org/pdf/1709.00939v1",
                "rel": "related",
                "type": "application/pdf"
            }
        ],
        "published": "2017-09-04T13:17:20Z",
        "updated": "2017-09-04T13:17:20Z",
        "categories": [
            {
                "term": "cs.CE",
                "scheme": "http://arxiv.org/schemas/atom"
            }
        ]
    }
];

module.exports = {papers};
