(this.webpackJsonpbulk_mail_schedule = this.webpackJsonpbulk_mail_schedule || []).push([
    [0], {
        117: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                s = a.n(n),
                i = a(6),
                r = a.n(i),
                l = (a(81), a(27)),
                o = a.n(l),
                c = a(43),
                u = a(36),
                m = a(37),
                d = a(41),
                p = a(38),
                h = a(42),
                f = a(61),
                v = a.n(f),
                b = a(62),
                g = a.n(b),
                y = a(63),
                E = a(10),
                x = a(68),
                S = a(151),
                k = a(167),
                j = a(152),
                w = a(118),
                C = a(165),
                O = a(157),
                F = a(156),
                M = a(162),
                R = a(169),
                T = a(158),
                A = a(160),
                I = a(5),
                W = a(166),
                B = a(153),
                N = a(159),
                q = a(161),
                L = (a(110), a(148)),
                z = a(164),
                H = function(e) {
                    function t(e) {
                        var a;
                        return Object(u.a)(this, t), (a = Object(d.a)(this, Object(p.a)(t).call(this, e))).props = void 0, a.props = e, a
                    }
                    return Object(h.a)(t, e), Object(m.a)(t, [{
                        key: "render",
                        value: function() {
                            return s.a.createElement(L.a, {
                                control: s.a.createElement("div", null, s.a.createElement(z.a, {
                                    checked: this.props.checked,
                                    value: this.props.file.name,
                                    onChange: this.props.onChange
                                })),
                                label: "".concat(this.props.index + 1, ": ").concat(this.props.file.name)
                            })
                        }
                    }]), t
                }(n.Component);
            E.a.configure();
            var _ = Object(I.a)((function(e) {
                    return Object(W.a)({
                        root: {
                            "label + &": {
                                marginTop: e.spacing(3)
                            }
                        },
                        input: {
                            borderRadius: 4,
                            position: "relative",
                            backgroundColor: e.palette.background.paper,
                            border: "1px solid #ced4da",
                            fontSize: 16,
                            padding: "10px 26px 10px 12px",
                            transition: e.transitions.create(["border-color", "box-shadow"]),
                            fontFamily: ["-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
                            "&:focus": {
                                borderRadius: 4,
                                borderColor: "#80bdff",
                                boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
                            }
                        }
                    })
                }))(x.a),
                D = {
                    root: {
                        height: "100vh"
                    },
                    image: {
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    },
                    avatar: {
                        margin: "8",
                        backgroundColor: "#f50057"
                    },
                    form: {
                        width: "100%",
                        marginTop: "8"
                    },
                    submit: {
                        margin: "24px 0px 16px"
                    },
                    button: {
                        margin: "8",
                        width: "33.3%",
                        textAlign: "center"
                    },
                    input: {
                        display: "none"
                    }
                },
                K = function(e) {
                    function t(e) {
                        var a;
                        return Object(u.a)(this, t), (a = Object(d.a)(this, Object(p.a)(t).call(this, e))).state = {
                            user: "zihadmahiuddin@gmail.com",
                            pass: "ghigqrpqhobaxcoh",
                            server: "smtp.gmail.com",
                            port: 587,
                            tls: !1,
                            subject: "Testyy",
                            fromEmail: "zihadmahiuddin@gmail.com",
                            fromName: "Zihad",
                            testRecepients: ["tech.zihad@gmail.com", "zihad@brawlapi.cf"],
                            bulkRecepients: [],
                            body: "Test body!",
                            isHTML: !1,
                            limit: 1,
                            files: [],
                            selectedFiles: [],
                            sendAvailable: !0,
                            useSpaceKey: !1,
                            totalSentMails: 0,
                            spaceMode: !1,
                            disableButtons: !1,
                            cronExpression: ""
                        }, a
                    }
                    return Object(h.a)(t, e), Object(m.a)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "loadEmailsFromFile",
                        value: function(e) {
                            return new Promise((function(t, a) {
                                try {
                                    var n = new FileReader;
                                    n.onloadend = Object(c.a)(o.a.mark((function e() {
                                        var a, s, i, r, l, c, u, m, d, p;
                                        return o.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return a = n.result, console.log(a), e.next = 4, g()().fromString(a);
                                                case 4:
                                                    for (s = e.sent, i = [], r = !0, l = !1, c = void 0, e.prev = 9, u = s[Symbol.iterator](); !(r = (m = u.next()).done); r = !0) d = m.value, p = d[Object.getOwnPropertyNames(d)[0]], i.push(p);
                                                    e.next = 17;
                                                    break;
                                                case 13:
                                                    e.prev = 13, e.t0 = e.catch(9), l = !0, c = e.t0;
                                                case 17:
                                                    e.prev = 17, e.prev = 18, r || null == u.return || u.return();
                                                case 20:
                                                    if (e.prev = 20, !l) {
                                                        e.next = 23;
                                                        break
                                                    }
                                                    throw c;
                                                case 23:
                                                    return e.finish(20);
                                                case 24:
                                                    return e.finish(17);
                                                case 25:
                                                    t(i);
                                                case 26:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [9, 13, 17, 25],
                                            [18, , 20, 24]
                                        ])
                                    }))), console.log(typeof e), console.log(e), n.readAsBinaryString(e)
                                } catch (s) {
                                    a(s)
                                }
                            }))
                        }
                    }, {
                        key: "sendmail",
                        value: function() {
                            var e = Object(c.a)(o.a.mark((function e(t, a) {
                                var n, s, i, r, l = this;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (E.a.dismiss(), this.setState({
                                                    sendAvailable: !1
                                                }), n = {
                                                    host: this.state.server,
                                                    port: this.state.port,
                                                    secure: this.state.tls ? this.state.tls : 165 === this.state.port,
                                                    auth: {
                                                        user: this.state.user,
                                                        pass: this.state.pass
                                                    },
                                                    from: '"'.concat(this.state.fromName, '" <').concat(this.state.fromEmail, ">"),
                                                    to: t.join(", "),
                                                    subject: this.state.subject,
                                                    text: this.state.isHTML ? void 0 : this.state.body,
                                                    html: this.state.isHTML ? this.state.body : void 0,
                                                    cronExpression: "",
                                                    limit: this.state.limit
                                                }, s = "", s = "/send", !a || !this.state.cronExpression) {
                                                e.next = 15;
                                                break
                                            }
                                            if (y.validate(this.state.cronExpression)) {
                                                e.next = 11;
                                                break
                                            }
                                            return Object(E.a)("Invalid cron expression", {
                                                type: "error"
                                            }), e.abrupt("return");
                                        case 11:
                                            console.log(t), console.log(this.state.bulkRecepients), n.cronExpression = this.state.cronExpression, n.to = t.concat(this.state.bulkRecepients);
                                        case 15:
                                            return i = null, e.prev = 16, e.next = 19, v.a.post(s, n);
                                        case 19:
                                            i = e.sent, console.log(i.data), e.next = 26;
                                            break;
                                        case 23:
                                            e.prev = 23, e.t0 = e.catch(16), i = e.t0.response;
                                        case 26:
                                            if (e.prev = 26, !(r = i.data.code)) {
                                                e.next = 33;
                                                break
                                            }
                                            return E.a.dismiss(), Object(E.a)("An error has occured: ".concat(r), {
                                                type: "error",
                                                autoClose: !1
                                            }), this.setState({
                                                sendAvailable: !0
                                            }), e.abrupt("return");
                                        case 33:
                                            if (!this.state.cronExpression) {
                                                e.next = 37;
                                                break
                                            }
                                            return i.data.error ? Object(E.a)("Failed to schedule", {
                                                type: "error"
                                            }) : Object(E.a)("Scheduled", {
                                                type: "info"
                                            }), this.setState({
                                                bulkRecepients: []
                                            }), e.abrupt("return");
                                        case 37:
                                            return i.data.accepted.length ? (this.setState((function(e) {
                                                return {
                                                    totalSentMails: e.totalSentMails + i.data.accepted.length
                                                }
                                            }), (function() {
                                                E.a.dismiss(), Object(E.a)("".concat(l.state.totalSentMails, " emails were sent!"), {
                                                    type: "info",
                                                    autoClose: !1
                                                })
                                            })), i.data.rejected.length && (E.a.dismiss(), Object(E.a)("".concat(i.data.rejected.length, " emails were not sent!"), {
                                                type: "warning",
                                                autoClose: !1
                                            }))) : (E.a.dismiss(), Object(E.a)("No emails were sent!", {
                                                type: "warning",
                                                autoClose: !1
                                            })), this.setState({
                                                sendAvailable: !0
                                            }), e.finish(26);
                                        case 40:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [16, 23, 26, 40]
                                ])
                            })));
                            return function(t, a) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "test",
                        value: function() {
                            var e = this.state,
                                t = e.testRecepients,
                                a = e.limit,
                                n = t.splice(a);
                            this.setState({
                                testRecepients: n
                            }), t.length ? this.sendmail(t) : Object(E.a)("No recipients defined", {
                                type: "error"
                            })
                        }
                    }, {
                        key: "bulk",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.bulkRecepients,
                                n = t.limit,
                                s = a.splice(n);
                            this.setState({
                                bulkRecepients: s,
                                useSpaceKey: !!this.state.spaceMode || this.state.useSpaceKey
                            }, (function() {
                                a.length ? e.sendmail(a, !0) : Object(E.a)("No recipients defined", {
                                    type: "error"
                                })
                            }))
                        }
                    }, {
                        key: "stopSchedule",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return s.a.createElement("div", null, s.a.createElement(S.a, {
                                container: !0,
                                component: "main",
                                style: D.root
                            }, s.a.createElement(k.a, null), s.a.createElement(S.a, {
                                item: !0,
                                xs: 12,
                                sm: 8,
                                md: 3,
                                style: D.image
                            }, s.a.createElement("div", {
                                style: {
                                    margin: "64px 32px",
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column"
                                }
                            }, s.a.createElement(j.a, {
                                style: D.avatar
                            }, s.a.createElement(B.a, null)), s.a.createElement(w.a, {
                                component: "h1",
                                variant: "h5"
                            }, "SMTP Credentials"), s.a.createElement("div", {
                                style: D.form
                            }, s.a.createElement(C.a, {
                                variant: "outlined",
                                margin: "normal",
                                required: !0,
                                fullWidth: !0,
                                value: this.state.server,
                                id: "server",
                                label: "Server",
                                name: "server",
                                autoFocus: !0,
                                onChange: function(t) {
                                    e.setState({
                                        server: t.target.value
                                    })
                                }
                            }), s.a.createElement(C.a, {
                                variant: "outlined",
                                margin: "normal",
                                required: !0,
                                fullWidth: !0,
                                value: this.state.port.toString(),
                                name: "port",
                                label: "Port",
                                type: "number",
                                id: "port",
                                onChange: function(t) {
                                    e.setState({
                                        port: parseInt(t.target.value)
                                    })
                                }
                            }), s.a.createElement(C.a, {
                                variant: "outlined",
                                margin: "normal",
                                required: !0,
                                fullWidth: !0,
                                value: this.state.user,
                                id: "email",
                                label: "User",
                                name: "email",
                                autoComplete: "email",
                                onChange: function(t) {
                                    e.setState({
                                        user: t.target.value
                                    })
                                }
                            }), s.a.createElement(C.a, {
                                variant: "outlined",
                                margin: "normal",
                                required: !0,
                                fullWidth: !0,
                                value: this.state.pass,
                                name: "password",
                                label: "Password",
                                type: "password",
                                id: "password",
                                autoComplete: "current-password",
                                onChange: function(t) {
                                    e.setState({
                                        pass: t.target.value
                                    })
                                }
                            }), s.a.createElement(O.a, {
                                style: {
                                    float: "left",
                                    marginTop: "3%"
                                },
                                component: "legend"
                            }, "TLS"), s.a.createElement(F.a, {
                                style: {
                                    float: "right",
                                    width: "100%"
                                }
                            }, s.a.createElement(M.a, {
                                value: this.state.tls ? 1 : 0,
                                onChange: function(t) {
                                    e.setState({
                                        tls: 1 === parseInt(t.target.value)
                                    })
                                },
                                input: s.a.createElement(_, {
                                    name: "tls",
                                    id: "tls"
                                })
                            }, s.a.createElement(R.a, {
                                value: 0
                            }, "No"), s.a.createElement(R.a, {
                                value: 1
                            }, "Yes")))))), s.a.createElement(S.a, {
                                item: !0,
                                xs: !1,
                                sm: 4,
                                md: 5,
                                component: T.a
                            }, s.a.createElement("div", {
                                style: {
                                    margin: "64px 32px",
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column"
                                },
                                tabIndex: this.state.useSpaceKey ? 0 : void 0,
                                onKeyDown: function(t) {
                                    32 === t.keyCode && e.state.useSpaceKey && e.bulk()
                                }
                            }, s.a.createElement(j.a, {
                                style: D.avatar
                            }, s.a.createElement(N.a, null)), s.a.createElement(w.a, {
                                component: "h1",
                                variant: "h5"
                            }, "Mail Zone"), s.a.createElement("div", {
                                style: D.form
                            }, s.a.createElement(C.a, {
                                variant: "outlined",
                                margin: "normal",
                                required: !0,
                                fullWidth: !0,
                                value: this.state.subject,
                                id: "subject",
                                label: "Subject",
                                name: "subject",
                                onChange: function(t) {
                                    e.setState({
                                        subject: t.target.value
                                    })
                                }
                            }), s.a.createElement(C.a, {
                                variant: "outlined",
                                margin: "normal",
                                required: !0,
                                fullWidth: !0,
                                value: this.state.fromEmail,
                                name: "from_email",
                                label: "From (Email)",
                                id: "from_email",
                                onChange: function(t) {
                                    e.setState({
                                        fromEmail: t.target.value
                                    })
                                }
                            }), s.a.createElement(C.a, {
                                variant: "outlined",
                                margin: "normal",
                                required: !0,
                                fullWidth: !0,
                                value: this.state.fromName,
                                name: "from_name",
                                label: "From (Name)",
                                id: "from_name",
                                onChange: function(t) {
                                    e.setState({
                                        fromName: t.target.value
                                    })
                                }
                            }), s.a.createElement(C.a, {
                                variant: "outlined",
                                margin: "normal",
                                fullWidth: !0,
                                value: this.state.testRecepients.join("\n"),
                                name: "recepients",
                                label: "Recepients",
                                id: "recepients",
                                multiline: !0,
                                rows: 6,
                                onKeyPress: function(t) {
                                    if ("Enter" === t.key) {
                                        var a = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            n = e.state.testRecepients;
                                        n = n.filter((function(e) {
                                            return e.match(a)
                                        })), e.setState({
                                            testRecepients: n
                                        })
                                    }
                                },
                                onChange: function(t) {
                                    var a = t.target.value.split("\n");
                                    e.setState({
                                        testRecepients: a
                                    })
                                }
                            }), s.a.createElement(C.a, {
                                variant: "outlined",
                                margin: "normal",
                                required: !0,
                                fullWidth: !0,
                                value: this.state.body,
                                name: "body",
                                label: "Body",
                                id: "body",
                                multiline: !0,
                                rows: 8,
                                onChange: function(t) {
                                    e.setState({
                                        body: t.target.value
                                    })
                                }
                            }), s.a.createElement(O.a, {
                                style: {
                                    float: "left",
                                    marginTop: "3%"
                                },
                                component: "legend"
                            }, "HTML"), s.a.createElement(F.a, {
                                style: {
                                    float: "right",
                                    width: "100%"
                                }
                            }, s.a.createElement(M.a, {
                                value: this.state.isHTML ? 1 : 0,
                                onChange: function(t) {
                                    e.setState({
                                        isHTML: 1 === parseInt(t.target.value)
                                    })
                                },
                                input: s.a.createElement(_, {
                                    name: "isHTML",
                                    id: "isHTML"
                                })
                            }, s.a.createElement(R.a, {
                                value: 0
                            }, "No"), s.a.createElement(R.a, {
                                value: 1
                            }, "Yes"))), s.a.createElement(O.a, {
                                style: {
                                    float: "left",
                                    marginTop: "3%"
                                },
                                component: "legend"
                            }, "Space Mode"), s.a.createElement(F.a, {
                                style: {
                                    float: "right",
                                    width: "100%"
                                }
                            }, s.a.createElement(M.a, {
                                value: this.state.spaceMode ? 1 : 0,
                                onChange: function(t) {
                                    e.setState({
                                        spaceMode: 1 === parseInt(t.target.value)
                                    })
                                },
                                input: s.a.createElement(_, {
                                    name: "spaceMode",
                                    id: "spaceMode"
                                })
                            }, s.a.createElement(R.a, {
                                value: 0
                            }, "No"), s.a.createElement(R.a, {
                                value: 1
                            }, "Yes"))), s.a.createElement(O.a, {
                                style: {
                                    float: "left",
                                    marginTop: "3%"
                                },
                                component: "legend"
                            }, "Disable Buttons"), s.a.createElement(F.a, {
                                style: {
                                    float: "right",
                                    width: "100%"
                                }
                            }, s.a.createElement(M.a, {
                                value: this.state.disableButtons ? 1 : 0,
                                onChange: function(t) {
                                    e.setState({
                                        disableButtons: 1 === parseInt(t.target.value)
                                    })
                                },
                                input: s.a.createElement(_, {
                                    name: "disableButtons",
                                    id: "disableButtons"
                                })
                            }, s.a.createElement(R.a, {
                                value: 0
                            }, "No"), s.a.createElement(R.a, {
                                value: 1
                            }, "Yes"))), s.a.createElement(C.a, {
                                variant: "outlined",
                                margin: "normal",
                                required: !0,
                                fullWidth: !0,
                                value: this.state.limit.toString(),
                                name: "limit",
                                label: "Limit (max 25000)",
                                type: "number",
                                id: "limit",
                                onChange: function(t) {
                                    e.setState({
                                        limit: parseInt(t.target.value)
                                    })
                                }
                            }), s.a.createElement(C.a, {
                                variant: "outlined",
                                margin: "normal",
                                required: !0,
                                fullWidth: !0,
                                value: this.state.cronExpression,
                                name: "cron-expression",
                                label: "Cron Expression",
                                type: "text",
                                id: "limit",
                                onChange: function(t) {
                                    e.setState({
                                        cronExpression: t.target.value
                                    })
                                }
                            }), s.a.createElement("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-evenly"
                                }
                            }, s.a.createElement(A.a, {
                                type: "submit",
                                fullWidth: !0,
                                variant: "contained",
                                color: "primary",
                                style: {
                                    margin: "24px 0px 16px",
                                    width: "30%"
                                },
                                onClick: this.test.bind(this),
                                disabled: this.state.disableButtons && !this.state.sendAvailable
                            }, "Test"), s.a.createElement(A.a, {
                                type: "submit",
                                fullWidth: !0,
                                variant: "contained",
                                color: "primary",
                                style: {
                                    margin: "24px 0px 16px",
                                    width: "30%"
                                },
                                onClick: function() {
                                    e.bulk()
                                },
                                disabled: this.state.disableButtons && !this.state.sendAvailable
                            }, this.state.cronExpression ? "Schedule" : "Bulk"))))), s.a.createElement(S.a, {
                                item: !0,
                                xs: 12,
                                sm: 8,
                                md: 4,
                                style: D.image
                            }, s.a.createElement("div", {
                                style: {
                                    margin: "64px 32px",
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column"
                                }
                            }, s.a.createElement(j.a, {
                                style: D.avatar
                            }, s.a.createElement(q.a, null)), s.a.createElement(w.a, {
                                component: "h1",
                                variant: "h5"
                            }, "Files Zone"), s.a.createElement("div", {
                                style: D.form
                            }, s.a.createElement("input", {
                                accept: "text/csv",
                                style: {
                                    display: "none"
                                },
                                id: "file-chooser",
                                type: "file",
                                multiple: !0,
                                onChange: function(t) {
                                    var a = e.state,
                                        n = a.files,
                                        s = a.selectedFiles;
                                    n = n.concat(Array.from(t.target.files));
                                    for (var i = 0; i < n.length; i++) s.push(!0);
                                    e.setState({
                                        files: n,
                                        selectedFiles: s
                                    })
                                }
                            }), s.a.createElement("label", {
                                htmlFor: "file-chooser"
                            }, s.a.createElement(A.a, {
                                variant: "contained",
                                component: "span",
                                style: D.button
                            }, "Choose")), s.a.createElement("label", null, s.a.createElement(A.a, {
                                variant: "contained",
                                component: "span",
                                style: D.button,
                                onClick: Object(c.a)(o.a.mark((function t() {
                                    var a, n, s, i, r, l, c, u, m, d, p, h, f;
                                    return o.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                a = [], n = 0, s = 0, i = 0;
                                            case 3:
                                                if (!(i < e.state.files.length)) {
                                                    t.next = 32;
                                                    break
                                                }
                                                if (r = e.state.files[i], !e.state.selectedFiles[i]) {
                                                    t.next = 29;
                                                    break
                                                }
                                                return t.next = 8, e.loadEmailsFromFile(r);
                                            case 8:
                                                for (l = t.sent, c = !0, u = !1, m = void 0, t.prev = 12, d = l[Symbol.iterator](); !(c = (p = d.next()).done); c = !0) h = p.value, a.push(h), s++;
                                                t.next = 20;
                                                break;
                                            case 16:
                                                t.prev = 16, t.t0 = t.catch(12), u = !0, m = t.t0;
                                            case 20:
                                                t.prev = 20, t.prev = 21, c || null == d.return || d.return();
                                            case 23:
                                                if (t.prev = 23, !u) {
                                                    t.next = 26;
                                                    break
                                                }
                                                throw m;
                                            case 26:
                                                return t.finish(23);
                                            case 27:
                                                return t.finish(20);
                                            case 28:
                                                n++;
                                            case 29:
                                                i++, t.next = 3;
                                                break;
                                            case 32:
                                                f = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, a = a.filter((function(e) {
                                                    return e && e.match(f)
                                                })), E.a.dismiss(), Object(E.a)("Loaded ".concat(s, " email addresses from ").concat(n, " ").concat(1 === n ? "file" : "files"), {
                                                    type: "success"
                                                }), e.setState({
                                                    bulkRecepients: a
                                                });
                                            case 37:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [12, 16, 20, 28],
                                        [21, , 23, 27]
                                    ])
                                })))
                            }, "Load")), s.a.createElement("label", null, s.a.createElement(A.a, {
                                variant: "contained",
                                component: "span",
                                style: D.button,
                                onClick: function() {
                                    if (e.state.selectedFiles.some((function(e) {
                                            return !!e
                                        }))) {
                                        for (var t = e.state, a = t.files, n = t.selectedFiles, s = [], i = [], r = 0; r < n.length; r++) {
                                            n[r] || (s.push(a[r]), i.push(n[r]))
                                        }
                                        e.setState({
                                            files: s,
                                            selectedFiles: i
                                        })
                                    } else E.a.dismiss(), Object(E.a)("You must select at least one file to delete!", {
                                        type: "error"
                                    })
                                }
                            }, "Delete")), this.state.files.map((function(t, a) {
                                return s.a.createElement(H, {
                                    file: t,
                                    key: a,
                                    index: a,
                                    checked: e.state.selectedFiles[a],
                                    onChange: function() {
                                        var t = e.state.selectedFiles;
                                        t[a] = !t[a], e.setState({
                                            selectedFiles: t
                                        })
                                    }
                                })
                            })))))))
                        }
                    }]), t
                }(n.Component),
                P = function() {
                    return s.a.createElement(K, null)
                };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            r.a.render(s.a.createElement(P, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            }))
        },
        76: function(e, t, a) {
            e.exports = a(117)
        },
        81: function(e, t, a) {}
    },
    [
        [76, 1, 2]
    ]
]);
//# sourceMappingURL=main.9f83557e.chunk.js.map