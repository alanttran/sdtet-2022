<template>
	<v-dialog v-model="dialog" max-width="650">
		<v-btn class="sdtet-button-flat-button sdtet-wrap-text" flat color="teal" slot="activator">
			<div class="pa-2 sdtet-text-align-center">
				<img src="../../../assets/NonProfitBooth.svg">
				<br/> Non-Profit or
				<br>Government
			</div>
		</v-btn>
		<v-card>
			<v-card-title class="headline">Non-profit or Government</v-card-title>
			<v-card-text>
				<v-alert outline color="info" icon="info" :value="true">
					<span v-if="vendorData.nonProfitAvail"><b>Apply:</b>&nbsp; <a target="_blank" v-bind:href="vendorData.vendorApplicationURL">Vendor Form</a></span>
					<span v-if="!vendorData.nonProfitAvail">Vendor spots are all filled. Please contact <b>vendor@sdtet.com</b> if you have any questions</span>
				</v-alert>
				<v-layout>
					<v-flex sm6 md6 lg6>
						<h4 class="header">Electronic Payment</h4>
						<table>
							<tr>
								<td colspan="2">
									<form class="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
										<input type="hidden" name="cmd" value="_s-xclick">
										<input type="hidden" name="hosted_button_id" value="3FUPLUV62GQ7L">
										<table>
											<tr>
												<td>
													<input type="hidden" name="on0" value="Business Name">Business Name*
												</td>
											</tr>
											<tr>
												<td>
													<input class="sdtet-form-control" type="text" name="os0" maxlength="200" required>
												</td>
											</tr>
											<tr>
												<td style="width: 200px;">Booth Price</td>
												<td style="text-align: right">${{vendorData.nonProfitPrice}}.00</td>
											</tr>
											<tr>
												<td>Refundable deposit</td>
												<td style="text-align: right">${{vendorData.deposit}}.00</td>
											</tr>
											<tr>
												<td>
													<b>Total</b>
												</td>
												<td style="text-align: right">
													<b>${{vendorData.nonProfitPrice + vendorData.deposit}}.00</b>
												</td>
											</tr>
										</table>
										<br>
										<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
										<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
									</form>
								</td>
							</tr>
						</table>
					</v-flex>
					<v-flex sm6 md6 lg6>
						<h4 class="header ">or... Check Payment</h4>
						<p>Please write two checks payable to VAYA. Make sure to include your business name so we can match your payment to your application.</p>
						<ul>
							<li>Check 1: ${{vendorData.nonProfitPrice}}.00 for booth fees</li>
							<li>Check 2: ${{vendorData.deposit}}.00 for the refundable clean-up fee</li>
						</ul>
						<p>Then mail them to...</p>
						<p>
							<b>VAYA Vendor Committee</b>
							<br>PO Box 711912
							<br>San Diego, CA 92171
						</p>
					</v-flex>
				</v-layout>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="teal" flat @click.native="dialog = false">Close</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>
<script type="text/javascript">
	import data from '../vendors.json'

	export default {
		data () {
			return {
				dialog: false,
				vendorData: data
			}
		}
	}
</script>