export const rules = {
  data() {
    return {
			rules: {
				email: [
					{
						required: true,
						message: "Please input the email adress",
						trigger: "blur"
					},
					{
						type: "email",
						message: "Please input correct email address",
						trigger: "blur"
					}
				],
				password: [
					{
						required: true,
						message: "Please input the password",
						trigger: "blur"
					}
				],
				name: [
					{
						required: true,
						message: "Please input the name",
						trigger: "blur",
					}
				],
				passwordRegisterFirst: [
					{
						required: true,
						message: "Please input the password",
						trigger: "blur",
					},
					{
						min: 6,
						message: "Password must be at least 6 characters",
						trigger: "blur",
					},
					{
						validator: this.checkSecurityPassword,
						trigger: "blur",
					}
				],
				passwordRegisterSecond: [
					{
						required: true,
						message: "Please input the password",
						trigger: "blur",
					},
					{
						min: 6,
						message: "Password must be at least 6 characters",
						trigger: "blur",
					},
					{
						validator: this.checkMatchPassword,
						trigger: "blur",
					}
				]
			}
		}
	}
}