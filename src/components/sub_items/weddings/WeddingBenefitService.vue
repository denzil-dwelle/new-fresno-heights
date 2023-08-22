<template>
  <div class="wedding_benefit">
    <div class="wedding_benefit_content">
      <h2 class="wedding_benefit_heading">Benefits of Our Drone Services</h2>
      <div>
        <div class="wedding_benefit_sections">
          <h3 class="benefit_sections_heading">Aerial Photography and Videography:</h3>
          <p class="benefit_sections_desc"> Our drones capture breathtaking aerial shots and videos of your wedding venue, ceremony, and reception.
            These shots offer a unique perspective, showcasing the beauty of your surroundings and capturing the essence
            of the occasion.</p>
        </div>

        <div class="wedding_benefit_sections">
          <h3 class="benefit_sections_heading">Group Photos and Candid Moments:</h3>
          <p class="benefit_sections_desc"> Our drones can capture stunning group photos, including large wedding parties and guests. They can also
            discreetly capture candid moments and intimate exchanges, providing a unique viewpoint that complements
            traditional photography.</p>
        </div>

        <div class="wedding_benefit_sections">
          <h3 class="benefit_sections_heading">Stunning Venue and Landscape Shots:</h3>
          <p class="benefit_sections_desc"> Our drones can capture sweeping shots of your wedding venue, highlighting its architectural beauty and
            surrounding landscape. These shots are perfect for capturing grand entrances, first dances, or the couple
            against a picturesque backdrop.</p>
        </div>

        <div class="wedding_benefit_sections">
          <h3 class="benefit_sections_heading">Creative and Unique Perspectives:</h3>
          <p class="benefit_sections_desc"> With drones, we can capture shots from above, creating stunning visuals that showcase the grandeur and
            scale of your wedding. These shots can capture the overall ambiance, outdoor setups, or unique architectural
            features that make your wedding stand out.</p>
        </div>

        <div class="wedding_benefit_sections">
          <h3 class="benefit_sections_heading">Highlight Special Moments:</h3>
          <p class="benefit_sections_desc"> Our drones can capture unique moments such as releasing sky lanterns, fireworks displays, or outdoor
            games. These shots capture the essence of the celebration and create memorable visuals that will be
            cherished for years to come.</p>
        </div>

        <div class="wedding_benefit_sections">
          <h3 class="benefit_sections_heading">Memorable Wedding Video:</h3>
          <p class="benefit_sections_desc"> Combining aerial footage with ground-level shots, we create captivating wedding videos that encapsulate
            the entire day's events. From the ceremony to the reception, our videos tell a beautiful story and allow you
            to relive your special day.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'WeddingBenefitService'
}
</script>
<style>
.wedding_benefit {
  padding: 4%;
}

.wedding_benefit_content {
  border-radius: 5px;
  background: var(--bg_white);
  box-shadow: var(--shadow_61);
  height: 100%;
  padding: 4% 10% 4% 10%;
  text-align: center;
}

.wedding_benefit_heading{
  font-family: Jockey One,serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--background_linear);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3%;
}

.benefit_sections_heading{
  font-family: Jockey One,serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--background_linear_black);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.benefit_sections_desc{
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: var(--background_linear_black);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 400px) {
  .benefit_sections_desc{
    font-size: 16px;
  }
  .benefit_sections_heading{
    font-size: 25px;
  }
}

@media (max-width: 320px) {
  .benefit_sections_desc{
    font-size: 14px;
  }
  .benefit_sections_heading{
    font-size: 23px;
  }
}
</style>