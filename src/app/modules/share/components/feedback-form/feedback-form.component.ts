import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})


export class FeedbackFormComponent implements OnInit {

  // Array of star ratings
  stars: number[] = [1, 2, 3, 4, 5];
  selectedIndex: number = -1;
  ratingText: string = '';

  // Function to handle clicking on a star
  onStarClick(index: number): void {
    this.selectedIndex = index + 1;

    // Update the rating text based on the selected star rating
    switch (this.selectedIndex) {
      case 1:
        this.ratingText = 'Bad';
        break;
      case 2:
        this.ratingText = 'Poor';
        break;
      case 3:
        this.ratingText = 'Average';
        break;
      case 4:
        this.ratingText = 'Very Good';
        break;
      case 5:
        this.ratingText = 'Excellent';
        break;
      default:
        this.ratingText = '';
    }
  }

  // Variables to store form input values
  reviewText = '';
  reviewTitle = '';
  visitDate = '';
  groupType = '';

  // Function to handle form submission
  onSubmit() {
    // Validate required fields
    if (this.selectedIndex <= 0 || !this.reviewText || !this.reviewTitle || !this.visitDate || !this.groupType) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Form submitted');
  }

  // Array to store reviews
  reviews: any[] = [];

  ngOnInit(): void {
    this.loadDummyReviews();
  }

  // Function to load dummy reviews data
  loadDummyReviews() {
    for (let i = 1; i <= 10; i++) {
      this.reviews.push({
        id: i,

        userName: 'User name ' + i,
        starImageUrl: 'https://thumbs.dreamstime.com/b/five-star-rating-icon-vector-stars-flat-isolated-162380031.jpg',
        reviewText: `This is review number ${i}. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.`,
        showMore: false
      });
    }
  }

  // Function to toggle the "more" or "less" links in reviews
  toggleMoreLess(id: number, event: MouseEvent) {
    event.preventDefault();
    this.reviews[id - 1].showMore = !this.reviews[id - 1].showMore;
  }

}
