<template>
 <v-dialog v-model="dialog"  max-width="650">
  <v-btn class="sdtet-button-flat-button sdtet-wrap-text" flat color="teal"  slot="activator">
    <div class="pa-2 sdtet-text-align-center">
      <img src="../../../assets/FoodBooth.svg"><br/>
      Food and/or<br>Beverage
    </div>
  </v-btn>

  <v-card>
   <v-card-title class="headline">Food and/or Beverage</v-card-title>
   <v-card-text>
    <v-alert outline color="info" icon="info" :value="true">
      <span v-if="vendorData.foodAvail"><b>Apply:</b>&nbsp; <a target="_blank" v-bind:href="vendorData.foodApplicationURL">Food Vendor Form</a></span>
      <span v-if="!vendorData.foodAvail">Vendor spots are all filled. Please contact <b>vendor@sdtet.com</b> if you have any questions</span>
    </v-alert>
    <h4 class="header ">Exclusivity Fee</h4>
      <p>To reserve a food item’s exclusivity sold by you, there will be an additional ${{vendorData.foodExclusivePrice}} charge per item. These items cannot be common food such as B.B.Q., rice, eggrolls, spring rolls, etc. Exclusivity will be first-come, first-serve basis at Vendor Chairs’ discretion. For further questions, contact a Vendor Chair. If we find that your exclusivity claim is invalid or already have been claimed, we will issue you a refund.</p>
    <v-layout>
    <v-flex sm6 md6 lg6>
      <h4 class="header ">Electronic Payment</h4>
      <table>
        <tr>
          <td style="width: 280px;">Price of Booth</td>
          <td style="text-align: right">${{vendorData.foodPrice}}.00</td>
        </tr>
        <tr>
          <td>Refundable cleanup fee</td>
          <td style="text-align: right">${{vendorData.deposit}}.00</td>
        </tr>
        <tr>
          <td>
            <b>Total</b>
          </td>
          <td style="text-align: right">
            <b>${{vendorData.foodPrice + vendorData.deposit}}.00</b>
          </td>
        </tr>
        <tr>
          <td>Exclusive claim fee (optional)</td>
          <td style="text-align: right">${{vendorData.foodExclusivePrice}}.00</td> 
        </tr>
      </table>
      <br>
      <form class="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="DF3QQL4L6XSCC">
        <table>
          <tr>
            <td>
              <input type="hidden" name="on0" value="Food Booth Option">Food Booth Option
            </td>
          </tr>
          <tr>
            <td>
              <select id="exclusive-select" class="sdtet-form-control" name="os0">
                <option value="Food Booth">Food Booth ${{vendorData.foodPrice + vendorData.deposit}}</option>
                <option value="Food Booth w/ one exclusive item">Food Booth w/ one exclusive item ${{vendorData.foodPrice + vendorData.deposit + vendorData.foodExclusivePrice}}</option>
                <option value="Food Booth w/ two exclusive items">Food Booth w/ two exclusives ${{vendorData.foodPrice + vendorData.deposit + vendorData.foodExclusivePrice * 2}}</option>
                <option value="Food Booth w/ three exclusive items">Food Booth w/ three exclusives ${{vendorData.foodPrice + vendorData.deposit + vendorData.foodExclusivePrice * 3}}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input class="sdtet-form-control" type="hidden" name="on1" value="Business Name">Business Name*</td>
            </tr>
            <tr>
              <td>
                <input class="sdtet-form-control" type="text" name="os1" maxlength="200" required>
              </td>
            </tr>
          </table>
          <br>
          <input type="hidden" name="currency_code" value="USD">
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>
      </v-flex>
      <v-flex sm6 md6 lg6 style="padding-left: 25px;">
        <h4 class="header ">or... Check Payment</h4>
        <p>Please write two or three checks payable to VAYA. Make sure to include your business name so we can match your payment to your application.</p>
        <ul>
          <li>Check 1: ${{vendorData.foodPrice}}.00 for booth fees</li>
          <li>Check 2: ${{vendorData.deposit}}.00 for the refundable deposit</li>
          <li>Check 3 (optional): $150.00/$300.00/$450.00 for exclusive items</li>
        </ul>
        <p>Then mail them to...</p>
        <p>
          <b>VAYA Vendor Committee</b>
          <br>PO Box 711912
          <br>San Diego, CA 92171</p>
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

<style type="text/css">

</style>